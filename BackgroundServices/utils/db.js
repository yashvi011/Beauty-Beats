import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbconnection = async() =>{
    const DB = process.env.DB;
    
try{
    await mongoose.connect(DB).then( () => {
        console.log("Database is connected successfully");
    })
}catch (error) {
    console.log(error);
    setTimeout(dbconnection, 5000)
}
}

export default dbconnection;