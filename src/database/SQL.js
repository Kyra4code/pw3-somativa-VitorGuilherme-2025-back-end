import mysql2 from 'mysql2'

const database = mysql2.createConnection({
    "database": "Montador_Times",
    "port": 3306,
    "user": "root",
    "password":"etecembu@123",
})

export default database;