import cors from "cors";
import errorHandling from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import express from 'express';
const app = express();
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import bannerRoutes from './routes/banner.route.js';
import userRoute from "./routes/user.route.js";
import orderRoute from "./routes/order.route.js";
import dotenv from "dotenv";
import connectDB from "./util/db.js";
dotenv.config();
connectDB();

app.use("/api/banners", bannerRoutes);
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

//json body
app.use(express.json());
//Cors
app.use(cors());

// Import routes
// adjust path if inside a folder

//cookie-parser
app.use(cookieParser());
    
// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/banners', bannerRoutes);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/orders', orderRoute);



// Fallback for 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});
// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



//Error middleware
app.use(notFound);
app.use(errorHandling);


export default app;

