
async function connect(){ // conexao mySql

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise'); 
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/cadastro')
    console.log("Connect sucessful.")
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    return await conn.query('SELECT * FROM pessoas');
}

module.exports = {selectCustomers};