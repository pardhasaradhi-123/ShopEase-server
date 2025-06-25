const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.APPLICATION_URL, // frontend domain (update if using different port or domain)
    credentials: true, // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Serve images from "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Default route
app.get("/", (req, res) => res.send("API is running..."));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
