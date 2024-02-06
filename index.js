const express = require("express");
require('dotenv').config()

const app = express();

const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("you are on twitter route ");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is login route </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
