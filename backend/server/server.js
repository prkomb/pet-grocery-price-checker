const express = require("express");
const serverless = require("serverless-http");
const productsJson = require("../server.json");

const app = express();
const port = 3000;

app.get("/products", (req, res) => {
  res.send(productsJson);
});

app.listen(port, () => {
  console.log(`Products: ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
