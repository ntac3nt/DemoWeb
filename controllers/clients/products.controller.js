const SanPham = require("../../models/sanpham");
module.exports.products = async (req, res) => {
  const sanpham = await SanPham.find({
    status: "active",
    delected: false,
  });
  sanpham.forEach((item) => {
    item.pricenew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
  });
  res.render("client/page/products/products.pug", {
    titlepage: "Trang Sản Phẩm",
    sanpham: sanpham,
  });
};
