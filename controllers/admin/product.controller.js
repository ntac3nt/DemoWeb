// [GET] /admin/sanpham

const products = require("../../models/sanpham");

module.exports = async (req, res) => {
  const button = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.query.status) {
    const index = button.findIndex((item) => {
      return item.status == req.query.status;
    });
    button[index].class = "active";
  } else {
    const index = button.findIndex((item) => {
      return item.status == "";
    });
    button[index].class = "active";
  }

  let find = {
    delected: "false",
  };
  if (req.query.status) {
    find.status = req.query.status;
  }

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    find.title = keyword;
  }

  const sanphamadmin = await products.find(find);
  res.render("admin/pages/products/index.pug", {
    title: "Trang San Pham",
    sanphamadmin: sanphamadmin,
    button: button,
    keyword: keyword,
  });
};
