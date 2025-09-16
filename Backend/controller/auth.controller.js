import user from "../models/user.model.js";
import asyncHandler from 'express-async-handler';
import generateToken from "../util/generateToken.js";

//REGISTER USER
//route POST /api/v1/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(4000);
        throw new Error("User already exists");

    }
    const user = await User.create({
        name, email, password
    });
    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

//LOGIN USER
// route POST /api/v1/auth/login
//@access public 

const loginuser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if (user && await (user.matchPassword(password))) {
        generateToken(res, user._id); 
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }else{
        res.status(400);
        throw new Error("Invalid email or password");
    }
});

//LOGOUT USER 
// route POST /api/v1/auth/logout
//@access public

const logOut = asyncHandler(async(req,res) =>{
    res.cookie("jwt", "" ,{})
});

module.exports = { registerUser,  loginuser,  logoutUser};