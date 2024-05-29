const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const user_routes = require('./src/routes/userRoutes');

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

const MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&authSource=admin`;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(">>> Connected Database");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

app.get("/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Server running",
  });
});

app.use('/api', auth_routes);

module.exports = app;
