const express = require("express");
const Home = express.Router();
const index = require("../../controllers/clients/home.controller");
Home.get("/", index.home);

module.exports = Home;
