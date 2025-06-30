const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS for frontend
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../backend/public")));

// Import your data
let productsData = [];
try {
  productsData = require("../backend/server.json");
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

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server started on port", PORT);
  });
}
