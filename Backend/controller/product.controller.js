import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

//CREATE PRODUCT
const createProduct = asyncHandler(async (req, res) => {

    const newProduct = await Product(req.body);
    const Product = newProduct.save();

    if (product) {
        res.status(201).json(product);
    } else {
        res.status(400);
        throw new Error("Product was not created");
    }
});

//UPDATE PRODUCT
const upadteProduct = asyncHandler(async (req, res) => {
    const upadtedProduct = await Product.findByIdAndUpadte(
        req.params.id,
        {
            $set: req.body
        },
        { new: true }
    );
    if (!upadteProduct) {
        res.status(400);
        throw new Error("Product has not been updated");
    } else {
        res.status(201).json(upadteProduct);
    }
});

//DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpadte(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("product was not deleted");
    } else {
        res.status(201).json("product deleted successfully");
    }
});

//GET PRODUCT
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("product not found");
    } else {
        res.status(200).json("product");
    }
});

//GET ALL PRODUCTS
const getALLproducts = asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qsearch = req.query.search;

    let products;
    if (qNew) {
        products = await Product.find().sort({ createdAt: -1 });
    } else if (qCategory) {
        products = await Product.find({ categories: { $in: [qCategory] } });
    } else if (qSearch) {
        products = await Product.find({
            $text: {
                $search: qsearch,
                $caseSensitive: false,
                $dicriticSensitive: false,
            }
        });
    } else {
        products = await Product.find().sort({ createdAd: -1 });
        res.status(200).json(products);
    }
});

//RATING PRODUCT

const ratingProduct = asyncHandler(async (req, res) => {
    const { star, name, comment, postedBy } = req.body;

    if (star && name && comment && postedBy) {
        const postedBy = await Product.findByIdAndUpadte(req.params.id,
            {
                $push: { ratings: { star, name, comment, postedBy } },
            },
            {
                new: true
            }
        );
        res.status(201).json("produce was  rated successfully");
    } else {
        res.status(400);
        throw new Error("product was not rated successfully ");
    }
});

export {ratingProduct, getALLproducts, getProduct, createProduct, upadteProduct, deleteProduct}