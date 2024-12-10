const ProductRouter = require("./products.router");
const HomeRouter = require("./home.router");
module.exports = (app) => {
  app.use("/", HomeRouter);
  app.use("/", ProductRouter);
};
