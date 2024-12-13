const express = require("express");
const routeradmin = express.Router();

const controller = require("../../controllers/admin/dashboard.controller");

routeradmin.get("/", controller.dashboard);

module.exports = routeradmin;
