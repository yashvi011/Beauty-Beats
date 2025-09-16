import Order from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

//CREATE ORDER

const getOrder = asyncHandler(async(req,res)=>{
    const newOrder = Order(req.body);
    const saveOrder = await newOrder.save();
    if(!saveOrder){
        res.status(400);
        throw new Error("Order was not created");
    }else{
        res.status(201).json(savedOrder);
    }
});