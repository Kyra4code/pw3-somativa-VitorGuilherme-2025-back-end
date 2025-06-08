const express = require("express");
const tbl_user = require("./controller/userController.js");
const tbl_teams = require("./controller/teamsController.js");

const routes = express();

routes.use("/user", tbl_user);
routes.use("/teams", tbl_teams);

module.exports = routes;