const express = require("express");
const router = express.Router();
const SanPham = require("../../model/sanpham");
const product = require("../../controllers/clients/products.controller");
router.get("/sanpham", product.products);

module.exports = router;
