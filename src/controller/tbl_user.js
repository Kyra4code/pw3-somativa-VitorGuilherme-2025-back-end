const express = require("express");
const {createUser, loginUser} = require( "../service/tbl.user.js");

const route = express.Router();

//Criação de usuário
route.post("/createUser", async (request, response) => {
    const {username,email, password} = request.body;

    console.log("Dados chegaram com sucesso!");

    if(username.length > 5  && password.length > 5 && email.length > 5){

        await createUser(username, email, password);
        console.log("Usuário criado com sucesso!");
        response.status(201).json({ message: "Usuário criado com sucesso!" });

    }
});

// Fazendo login
route.post("/login", async (request, response) => {
    const { email, password } = request.body;
    console.log("Dados chegaram com sucesso!");

    try{
        const info = await loginUser(email, password);

        if(!info){
            return response.status(401).json({ message: "Email ou senha inválidos!" });
        }else{
            response.status(200).json({ message: "Login bem-sucedido!" });
        }

    }
    catch(error){
        console.error("Erro ao fazer login:", error);
        return response.status(401).json({ message: "Login falhou!" });
    }


});


route.get("/", async (request, response) => {
    response.json({ message: "Teste" });
});

module.exports = route;