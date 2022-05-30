async function connect(){ // conexao mySql

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise'); 
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/cadastro')
    console.log("Connect sucessful.")
    global.connection = connection;
    return connection;
}

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE pessoas SET nome=?, nascimento=?, sexo=?, peso=?, altura=?, nacionalidade=? WHERE id=?';
    const values = [customer.nome, customer.nascimento, customer.sexo, customer.peso, customer.altura, customer.nacionalidade, id];
    return await conn.query(sql, values);

}

module.exports = {updateCustomer}