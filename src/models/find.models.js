
async function connect(){ // conexao mySql

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise'); 
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/cadastro')
    console.log("Connect sucessful.")
    global.connection = connection;
    return connection;
}

async function findCustomers(nome){
    const conn = await connect();
    const sql = 'SELECT * FROM pessoas WHERE nome=?;';
    const values = [nome];
    return await conn.query(sql, values);
}

module.exports = {findCustomers};