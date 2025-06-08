async function createTeam(name, id_user) {
    const sql = "INSERT INTO tbl_teams (name, id_user) VALUES (?, ?)";
    const positions = [name, id_user];

    const conn = await database.connect();
    await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
}

async function selectTeam(id_user) {
    const sql = "SELECT * FROM tbl_teams WHERE id_user = ?";
    const positions = [id_user];

    const conn = await database.connect();
    const [rows] = await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();

    return rows[0];
}

module.exports = { createTeam, selectTeam };