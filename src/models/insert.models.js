async function connect(){ // conexao mySql

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise'); 
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/cadastro')
    console.log("Connect sucessful.")
    global.connection = connection;
    return connection;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO pessoas(nome, nascimento, sexo, peso, altura, nacionalidade) VALUES (?,?,?,?,?,?);'
    const values = [customer.nome, customer.nascimento, customer.sexo, customer.peso, customer.altura, customer.nacionalidade];
    await conn.query(sql, values);
}

module.exports = {insertCustomer}