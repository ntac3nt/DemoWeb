const SanPham = require("../../model/sanpham");
module.exports.products = async (req, res) => {
  const sanpham = await SanPham.find();
  // console.log(sanpham);
  res.render("client/page/products/products.pug", {
    titlepage: "Trang Sản Phẩm",
    product: sanpham,
  });
};
