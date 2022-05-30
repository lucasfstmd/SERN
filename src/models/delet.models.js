async function connect(){ // conexao mySql

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise'); 
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/cadastro')
    console.log("Connect sucessful.")
    global.connection = connection;
    return connection;
}

async function deletCustomers(id){
    const conn = await connect();
    const sql = 'DELETE FROM pessoas WHERE id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {deletCustomers}