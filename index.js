const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5001, () => {
  console.log("Running on port 5001.");
});

// Export the Express API
module.exports = app;