const express = require("express");
const route = express.Router();
const payController = require("./src/controllers/payController");

route.get("/", payController.index);

route.post("/process_payment", payController.payment);

module.exports = route;
