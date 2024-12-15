// [GET] /admin/sanpham

const products = require("../../models/sanpham");
const filtstatushelper = require("../../helpers/filtstatus");
const search = require("../../helpers/search.helper");
const searchHelper = require("../../helpers/search.helper");
const Product = require("../../models/sanpham");
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

  // pagination
  let pagi = {
    currentpage: 1,
    limitproduct: 4,
  };

  if (req.query.page) {
    pagi.currentpage = parseInt(req.query.page);
  }
  pagi.startposition = (pagi.currentpage - 1) * pagi.limitproduct;

  var currentproduct = await Product.countDocuments(find);

  currentproduct = Math.ceil(currentproduct / pagi.limitproduct);
  pagi.totalpage = currentproduct;

  const sanphamadmin = await products
    .find(find)
    .limit(pagi.limitproduct)
    .skip(pagi.startposition);

  res.render("admin/pages/products/index.pug", {
    title: "Trang San Pham",
    sanphamadmin: sanphamadmin,
    button: button,
    keyword: keyword,
    pagi: pagi,
  });
};
