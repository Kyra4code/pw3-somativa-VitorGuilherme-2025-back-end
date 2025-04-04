import express from "express";
import tbl_user from "./controller/tbl_user.js";

const route = express();

route.use("/user", tbl_user);

export default route;