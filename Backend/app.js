import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import orderRoute from "./routes/order.route.js";
import userRoute from "./routes/user.route.js";
import cartRoute from "./routes/cart.route.js";
import stripeRoute from "./routes/stripe.js";
import bannerRoute from "./routes/banner.route.js";
import cors from "cors";
import {notFound, errorHandler } from "./middleware/error.middleware.js";

const app = express();
export default app;

// CORS MIDDLEWARE
app.use(cors());

// JSON MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// COOKIE PARSER MIDDLEWARE
app.use(cookieParser());

// ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/stripe", stripeRoute);
app.use("/api/v1/banners", bannerRoute);

// ERROR MIDDLEWARES
app.use(notFound);
app.use(errorHandler);