const dashboardrouter = require("./home.router");
const Path = require("../../config/system");
module.exports = (app) => {
  const Path_Admin = Path.PathAdmin;
  app.use(Path_Admin + "/dashboard", dashboardrouter);
};
