import express from "express";
import app from './app.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import bannerRoutes from './routes/banner.route.js';
import productRoutes from './routes/product.route.js';



dotenv.config();

// Middleware
app.use(express.json());

// Import routes
// if authRoutes.js is in same folder as server.js
app.use("/api/user",userRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
