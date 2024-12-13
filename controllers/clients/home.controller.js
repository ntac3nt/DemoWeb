// [GET] /
module.exports.home = (req, res) => {
  res.render("client/page/home/index.pug", {
    titlepage: "Trang Chủ",
  });
};
