const express = require("express");

const productrouter = express.Router();

const ControllerRouter = require("../../controllers/admin/product.controller");

productrouter.get("/", ControllerRouter.index);

productrouter.patch(
  "/change-status/:status/:id",
  ControllerRouter.changestatus
);

productrouter.patch("/change-multi", ControllerRouter.change_multi);
module.exports = productrouter;

productrouter.delete("/delete/:id", ControllerRouter.delete_item);
