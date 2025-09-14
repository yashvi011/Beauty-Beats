import { ratingProduct, getALLproducts, getProduct, createProduct, upadteProduct, deleteProduct } from "../controller/product.controller.js";
import express from "express";
const router = express.router();

//RATING PRODUCT ROUTE
router.put("/rating/:productId", ratingProduct);
//GET ALL PRODUCTS
router.get("/", getALLproducts);
//GET ONE PRODUCT
router.get("/find/:id", getProduct);
//CREATE PRODUCT
router.post("/", createProduct);
//UPADTE PRODUCT
router.put("/:id", upadteProduct);

//DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;