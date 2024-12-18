const express = require("express");
const multer = require("multer");
const storage = require("../../helpers/MulterStorage");
const upload = multer({ storage: storage() });
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
// [get] admin/sanpham/creat
productrouter.get("/creat", ControllerRouter.creat);

// [post] admin/sanpham/creat
productrouter.post(
  "/creat",
  upload.single("thumbnail"),
  ControllerRouter.creatpost
);
