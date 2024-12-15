module.exports = (req, find) => {
  let keyword = "";
  if (req.keyword) {
    keyword = req.keyword;
    const regex = new RegExp(keyword, "i");
    find.title = regex;
  }
  return keyword;
};
