const mongoose = require("mongoose");
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Spschema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    discountPercentage: Number,
    brand: Number,
    images: Array,
    thumbnail: String,
    status: String,
    position: Number,
    stock: Number,
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    delected: {
      type: Boolean,
      default: false,
    },
    delectedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", Spschema, "Sanpham");

module.exports = Product;
