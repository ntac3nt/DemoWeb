const SanPham = require("../../models/sanpham");
module.exports.products = async (req, res) => {
  const sanpham = await SanPham.find({
    status: "active",
    delected: false,
  });
  // console.log(sanpham);
  res.render("client/page/products/products.pug", {
    titlepage: "Trang Sản Phẩm",
    sanpham: sanpham,
  });
};
