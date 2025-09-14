
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes.js');
const productRoutes = require('./routes/product.route.js');

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

//json body
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes.js"); // adjust path if inside a folder

//cookie-parser
app.use(cookieParser());
    
// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

//Cors
app.use(cors());

// Fallback for 404 errors
app.use((req, res) => {
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
app.use(errorHandler);


export default app;

