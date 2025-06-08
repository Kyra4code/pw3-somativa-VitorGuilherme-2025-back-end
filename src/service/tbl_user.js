const database = require( "../database/SQL");

async function createUser(username, email, password){
    const sql = "const sql = INSERT INTO tbl_user (username, email, password) VALUES (?, ?, ?);"
    const positions = [username, email, password]

    const conn = await database.connect();
    await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
}

async function selectUser(email, password){
    const sql = "select * from tbl_user where email = ? and password = ?"
    const positions = [email, password]

    const conn = await database.connect();
    const [rows] = await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
    
    return rows[0];
}



module.exports = {createUser, selectUser}