const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

const userData = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("you are on twitter route ");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is login route </h1>");
});

app.get("/user", (req, res) => {
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
