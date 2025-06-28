const express = require("express");
const pup = require("puppeteer");
const data = require("./server.json");

const app = express();

const port = 3000;

app.get("/api", (req, res) => {
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
