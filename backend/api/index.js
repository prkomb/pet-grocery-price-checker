const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

// Enable CORS for frontend
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Import your data
let productsData = [];
try {
  productsData = require("../server.json");
} catch (error) {
  console.log("No server.json found, using empty array");
}

// API Routes
app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.get("/api", (req, res) => {
  res.json({ message: "Grocery Price Checker API", products: productsData });
});

app.listen(3000, () => {
  console.log("Listening");
});

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);
