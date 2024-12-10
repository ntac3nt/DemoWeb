const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/products");
const SanPham = mongoose.model("Sanpham", {
  title: String,
  price: Number,
  thumbnail: String,
});
const pug = require("pug");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("client/page/home/index.pug", {
    titlepage: "Trang Chủ",
  });
});

app.get("/sanpham", async (req, res) => {
  const sanpham = await SanPham.find();
  // console.log(sanpham);
  res.render("client/page/products/products.pug", {
    titlepage: "Trang Sản Phẩm",
    product: sanpham,
  });
});

app.listen(port, () => {
  console.log("Đã chạy thành công với cổng 3000");
});
