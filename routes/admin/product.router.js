const express = require("express");

const productrouter = express.Router();

const ControllerRouter = require("../../controllers/admin/product.controller");

productrouter.get("/", ControllerRouter.index);

productrouter.patch(
  "/change-status/:status/:id",
  ControllerRouter.changestatus
);
module.exports = productrouter;
