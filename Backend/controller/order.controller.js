import Order from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

//CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {
    const newOrder = Order(req.body);
    const saveOrder = await newOrder.save();
    if (!saveOrder) {
        res.status(400);
        throw new Error("Order was not created");
    } else {
        res.status(201).json(savedOrder);
    }
});

//UPADTE ORDER
const updateOrder = asyncHandler(async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    if (!updatedOrder) {
        res.status(400);
        throw new Error("Order was not upadted");
    } else {
        res.status(201).json(updatedOrder);
    }
});

//DELETE ORDER
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
        res.status(400);
        throw new Error("Order was not deleted successfully");
    } else {
        res.status(200).json("Order");
    }
});

//GET USER ORDER
const getUserOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find({ userId: req.params.id }).reverse();
    if (!orders) {
        res.status(400);
        throw new Error("No order was found or something went wrong");
    } else {
        res.status(200).json(orders);
    }
});

//GET ALL ORDERS
const getAllOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find().reverse();
    if (!orders) {
        res.status(400);
        throw new Error("No order was found or something went wrong");
    } else {
        res.status(200).json(orders);
    }
});

export {getAllOrder, getOrder, getUserOrder, deleteOrder, updateOrder, createOrder}