const express = require("express");

require("dotenv").config();

const database = require("./config/database.js");

database.connect();

const router = require("./routes/client/index.router");
const pug = require("pug");
const app = express();
const port = process.env.Port;
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
router(app);

app.listen(port, () => {
  console.log(`Đã chạy thành công với cổng : ${port} `);
});
