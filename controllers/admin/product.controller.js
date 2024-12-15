// [GET] /admin/sanpham

const products = require("../../models/sanpham");
const filtstatushelper = require("../../helpers/filtstatus");
const search = require("../../helpers/search.helper");
const searchHelper = require("../../helpers/search.helper");
module.exports = async (req, res) => {
  //filt status
  const button = filtstatushelper(req.query);
  let find = {
    delected: "false",
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  // search
  const keyword = searchHelper(req.query, find);
  const sanphamadmin = await products.find(find);
  res.render("admin/pages/products/index.pug", {
    title: "Trang San Pham",
    sanphamadmin: sanphamadmin,
    button: button,
    keyword: keyword,
  });
};
