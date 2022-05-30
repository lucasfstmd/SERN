// Rotas da API
const express = require('express');
const { pessoas } = require('../server');

const routes = express.Router();

routes.get('/',function(req,res){
    res.json({message:'Eae cambada de puta'});
    console.log(pessoas);
});

module.exports = routes;