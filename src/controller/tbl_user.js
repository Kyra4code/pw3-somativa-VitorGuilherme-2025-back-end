import express from "express";

const route = express.Router();

route.post("/createUser", async(request, response)=>{
        const {username, email, password} = request.body;
        console.log("Dados chegaram com sucesso!")
})

route.get("/",async()=>{
    return {"message": "Teste"}
})

export default route;