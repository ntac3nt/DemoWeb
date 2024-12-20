const express = require("express");
const multer = require("multer");
const storage = require("../../helpers/MulterStorage");
const upload = multer({ storage: storage() });
const validate = require("../../validates/admin/product.validate");
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
  validate.createPost,
  ControllerRouter.creatpost
);

// [get] pathadmin/sanpham/edit/id

productrouter.get("/edit/:id", ControllerRouter.edit);

// [patch] admin/sanpham/edit/id
productrouter.patch(
  "/edit/:id",
  upload.single("thumbnail"),
  validate.createPost,
  ControllerRouter.editpost
);
