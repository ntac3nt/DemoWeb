module.exports = (pagi, req, currentproduct) => {
  if (req.page) {
    pagi.currentpage = parseInt(req.page);
  }
  pagi.startposition = (pagi.currentpage - 1) * pagi.limitproduct;

  currentproduct = Math.ceil(currentproduct / pagi.limitproduct);
  pagi.totalpage = currentproduct;
  return pagi;
};
