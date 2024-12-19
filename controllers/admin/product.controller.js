// [GET] /adminnta/sanpham
const config = require("../../config/system");
const products = require("../../models/sanpham");
const filtstatushelper = require("../../helpers/filtstatus");
const search = require("../../helpers/search.helper");
const searchHelper = require("../../helpers/search.helper");
const Product = require("../../models/sanpham");
const pagination = require("../../helpers/page.helper");
module.exports.index = async (req, res) => {
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

  var currentproduct = await products.countDocuments(find);
  let pagi = pagination(
    {
      currentpage: 1,
      limitproduct: 4,
    },
    req.query,
    currentproduct
  );

  const sanphamadmin = await products
    .find(find)
    .sort({ position: "desc" })
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
// [patch] /adminnta/sanpham/change-status/status/id

module.exports.changestatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;
  await Product.updateOne({ _id: id }, { status: status });

  req.flash("success", "Cập nhật trạng thái thành công!!!");
  res.redirect("back");
};

module.exports.change_multi = async (req, res) => {
  const type = req.body.type;
  const id = req.body.ids.split(",");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: id } }, { status: "active" });
      req.flash(
        "success",
        `Cập nhật trạng thái ${id.length} sản phẩm thành công!!!`
      );
      break;
    case "inactive":
      await Product.updateMany({ _id: { $in: id } }, { status: "inactive" });
      req.flash(
        "success",
        `Cập nhật trạng thái ${id.length} sản phẩm thành công!!!`
      );
      break;
    case "delete-all":
      await Product.updateMany(
        { _id: { $in: id } },
        { delected: "true", delectedAt: new Date() }
      );
      req.flash("success", "Cập nhật trạng thái thành công!!!");
      break;
    case "change-position":
      for (const item of id) {
        let [id, pos] = item.split("-");
        pos = parseInt(pos);
        await Product.updateOne({ _id: id }, { position: pos });
      }
      req.flash("success", "Cập nhật trạng thái thành công!!!");
      break;
    default:
      break;
  }
  res.redirect("back");
};

// [delete] /adminnta/sanpham/delete/id
module.exports.delete_item = async (req, res) => {
  const id = req.params.id;
  await Product.updateOne(
    { _id: id },
    { delected: true, delectedAt: new Date() }
  );

  req.flash("success", "Cập nhật trạng thái thành công!!!");

  res.redirect("back");
};

// [get] /admin/sanpham/creat
module.exports.creat = (req, res) => {
  res.render("admin/pages/products/creat.pug", {
    title: "Trang San Pham",
  });
};

// [post] /admin/sanpham/creat
module.exports.creatpost = async (req, res) => {
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);
  if (req.body.position == "") {
    const pos = await Product.countDocuments();
    req.body.position = pos + 1;
  } else {
    req.body.position = parseInt(req.body.position);
  }

  req.body.thumbnail = `/images/${req.file.filename}`;
  const sanphamnew = new Product(req.body);
  await sanphamnew.save();

  res.redirect(`${config.PathAdmin}/sanpham`);
};
