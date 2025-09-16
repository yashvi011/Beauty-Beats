import express from "express";
const router = express.Router();
import {getAllOrder, getUserOrder, deleteOrder, updateOrder, createOrder} from "../controller/order.controller.js";

//CREATE ORDER ROUTE
router.post("/",createOrder);
//UPADTE ORDER ROUTE
router.put("/:id",updateOrder);
//GET ALL ORDERS ROUTE
router.get("/",getAllOrder);
//DELETE ORDER ROUTE
router.delete("/:id",deleteOrder);
//GET USER'S ORDER ROUTE
router.get("/find/:userId",getUserOrder);

export default router;