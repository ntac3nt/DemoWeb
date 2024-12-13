const express = require("express");

require("dotenv").config();

const database = require("./config/database.js");

database.connect();

const routerClient = require("./routes/client/index.router");

const path_amin = require("./config/system.js");

const routerAdmin = require("./routes/admin/index.router.js");
const pug = require("pug");

const app = express();
const port = process.env.Port;

app.locals.pathadmin = path_amin.PathAdmin;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
routerClient(app);

routerAdmin(app);

app.listen(port, () => {
  console.log(`Đã chạy thành công với cổng : ${port} `);
});
