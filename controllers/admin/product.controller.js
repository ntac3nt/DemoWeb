// [GET] /admin/sanpham

const products = require("../../models/sanpham");

module.exports = async (req, res) => {
  const sanphamadmin = await products.find({
    delected: "false",
  });
  res.render("admin/pages/products/index.pug", {
    title: "Trang San Pham",
    sanphamadmin: sanphamadmin,
  });
};
