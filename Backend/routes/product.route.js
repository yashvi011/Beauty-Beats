import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  ratingProduct,
  deleteProduct,
} from "../controller/product.controller.js";
import {protect} from "../middleware/auth.middleware.js"
const router = express.Router();

//CREATE PRODUCT ROUTE
router.post("/", createProduct);

//GET ALL PRODUCTS ROUTE
router.get("/", getAllProducts);

//GET ONE PRODUCT ROUTE
router.get("/find/:id", getProduct);

//UPDATE PRODUCT ROUTE
router.put("/:id", updateProduct);

// RATING PRODUCT ROUTE
router.put("/ratings/:productId", ratingProduct);

//DELETE PRODUCT ROUTE
router.delete("/:id", deleteProduct);

export default router;