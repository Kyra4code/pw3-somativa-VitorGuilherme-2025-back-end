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

async function updateTeam(name, id_user) {
    const sql = "UPDATE tbl_teams SET name = ? WHERE id_user = ?";
    const positions = [name, id_user];

    const conn = await database.connect();
    await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
}

async function deleteTeam(id_user) {
    const sql = "DELETE FROM tbl_teams WHERE id_user = ?";
    const positions = [id_user];

    const conn = await database.connect();
    await conn.query(sql, positions);
    console.log("Query feita com sucesso!");
    conn.end();
}

module.exports = { createTeam, selectTeam, updateTeam, deleteTeam };