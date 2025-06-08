const express = require('express');
const { createTeam, selectTeam, updateTeam, deleteTeam } = require('../service/tbl_team.js');

const route = express.Router();

route.post('/createTeam', async (request, response) => {
    const { teamName, teamDescription } = request.body;

    console.log("Dados chegaram com sucesso!");

    if (teamName.length > 3 && teamDescription.length > 5) {
        await createTeam(teamName, teamDescription);
        console.log("Equipe criada com sucesso!");
        response.status(201).json({ message: "Equipe criada com sucesso!" });
    } else {
        response.status(400).json({ message: "Dados inválidos!" });
    }
});

route.get('/selectTeam', async (request, response) => {
    const { id_user } = request.query;

    console.log("Dados chegaram com sucesso!");

    try {
        const info = await selectTeam(id_user);

        if (!info) {
            return response.status(404).json({ message: "Equipe não encontrada!" });
        } else {
            response.status(200).json(info);
        }
    } catch (error) {
        console.error("Erro ao buscar equipe:", error);
        return response.status(500).json({ message: "Erro ao buscar equipe!" });
    }
});

module.exports = route;