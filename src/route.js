const express = require("express");
const tbl_user = require("./controller/tbl_user.js");

const routes = express();

routes.use("/user", tbl_user);

module.exports = routes;