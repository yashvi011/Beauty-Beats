import express from "express";
import app from './app.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import bannerRoutes from './routes/banner.route.js';
import productRoutes from './routes/product.route.js';
import dbConnection from "./util/db.js";
import cors from "cors"

app.use(cors());
dotenv.config();

// Middleware
app.use(express.json());

// Sample dashboard data
const dashboardData = {
  usersCount: 150,
  ordersCount: 75,
  revenue: 12345.67,
};
// API endpoint to get dashboard data
app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

// Import routes
// if authRoutes.js is in same folder as server.js
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/banners", bannerRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product",productRoutes);



// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})