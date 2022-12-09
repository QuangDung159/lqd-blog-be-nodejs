require('dotenv').config();
const express = require("express");
const { connectDB } = require('./configs/db');
const cors = require('cors');

connectDB();
const app = express();

// cors
app.use(cors());

// body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5001, () => {
  console.log("Running on port 5001.");
});

// Export the Express API
module.exports = app;