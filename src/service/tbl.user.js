import database from "../database/SQL";

async function createUser(username, email, password){
    const sql = "insert into tbl_user set (?,?,?)"
    const positions = [username, email, password]

    const conn = await database.connect();
    await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
}

export default {createUser}