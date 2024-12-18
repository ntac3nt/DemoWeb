const mongoose = require("mongoose");

const Spschema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: Number,
  images: Array,
  thumbnail: String,
  status: String,
  delected: Boolean,
  delectedAt: Date,
});

const Product = mongoose.model("Product", Spschema, "Sanpham");

module.exports = Product;
