import user from "../models/user.model.js"
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

//UPADTE USER

const updateUser = asyncHandler(async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const upadatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (!updateUser) {
        res.status(400);
        throw new Error("User was not updated");
    } else {
        res.status(201).json(upadatedUser);
    }
});

//DELETE USER
const deleteUser = asyncHandler(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        res.status(400);
        throw new Error("User was not deleted successfully");
    } else {
        res.status(201).json("User was deleted successfully");
    }
});

//GET ONE USER
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findBy(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error("User was not found ");
    } else {
        res.status(200).json("user");
    }
});

//GET ALL USER
const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find();
    if (!users) {
        res.status(400);
        throw new Error("Users was not feteched.");
    } else {
        res.status(200).json("users");
    }
});

export{getAllUser, getUser, deleteUser, updateUser}