const express = require("express");

const productrouter = express.Router();

const ControllerRouter = require("../../controllers/admin/product.controller");

productrouter.get("/", ControllerRouter);

module.exports = productrouter;
