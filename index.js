const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect("mongodb://localhost:27017/products");
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
