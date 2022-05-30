(async () => { 
    const exibe = require('./exibe.models');
    const add = require('./insert.models');
    const update = require('./update.models');
    const delet = require('./delet.models');
    console.log('Começou bacana');

    console.log('INSER INTO pessoas')
    const result = await add.insertCustomer({nome:'Major', nascimento:'1994-03-30', sexo:'M', peso: 83.5, altura: 1.78, nacionalidade:'Russo'})
    console.log(result);
    
    console.log('SELECT * FROM pessoas');
    const pessoas = await exibe.selectCustomers();
    console.log(pessoas);

    console.log('UPDATE pessoas');
    const atualiza = await update.updateCustomer(5, {nome:'Mera', nascimento:'1994-11-30', sexo:'M', peso: 83.5, altura: 1.81, nacionalidade:'Indiano'});
    console.log(atualiza);

    console.log('DELETE pessoas');
    const deletar = await delet.deletCustomers(7);
    console.log(deletar);

})();   