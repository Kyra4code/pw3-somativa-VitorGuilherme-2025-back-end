const express = require("express");
// import cors from "cors";
const routes = require("./route.js");

const server = express();

// server.use(cors());
server.use(express.json())


server.listen(3000,()=>{
    console.log("Open")
})

server.use("/", routes);
