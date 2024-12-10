const mongoose = require("mongoose");
const SanPham = mongoose.model("Sanpham", {
  title: String,
  price: Number,
  thumbnail: String,
});

module.exports = SanPham;
