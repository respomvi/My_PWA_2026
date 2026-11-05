const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>My First PWA</h1><p>Created using Node.js and Express.</p>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
