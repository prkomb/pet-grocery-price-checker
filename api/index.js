const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Import your data
let productsData = [];
try {
  productsData = require("../backend/server.json");
} catch (error) {
  productsData = [];
}

// API Routes
app.get("/api/products", (req, res) => {
  res.json({ productsData });
});

app.get("/api", (req, res) => {
  res.json({ message: "Grocery Price Checker API", products: productsData });
});

module.exports = app;
module.exports.handler = serverless(app);
