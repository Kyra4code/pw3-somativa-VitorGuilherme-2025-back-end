const mysql2 = require('mysql2');

async function database(){
    return await mysql2.createConnection({
        "database": "Montador_Times",
        "port": 3306,
        "user": "root",
        "password":"etecembu@123",
    })
}

module.exports = database;