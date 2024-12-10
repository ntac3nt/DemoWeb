const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/products");
const router = require("./routes/client/index.router");
const pug = require("pug");
const app = express();
const port = 3001;
app.set("views", "./views");
app.set("view engine", "pug");

router(app);

app.listen(port, () => {
  console.log("Đã chạy thành công với cổng ");
});
