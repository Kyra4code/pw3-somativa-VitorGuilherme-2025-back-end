const express = require("express");
const tbl_user = require("./controller/tbl_user.js");
const tbl_teams = require("./controller/tbl_teams.js");

const routes = express();

routes.use("/user", tbl_user);
routes.use("/teams", tbl_teams)

module.exports = routes;