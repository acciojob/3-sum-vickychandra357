// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require("express");
const path = require("path");
const threeSum = require("./script");
const app = express();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.html"));
});

app.post("/threesum", (req, res) => {
  const { arr, target } = req.body;
  const ans = threeSum(arr, target);
  res.send({ message: ans });
});

module.exports = app;
