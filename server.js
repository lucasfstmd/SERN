const express = require('express'); //firmeware
const cookieParser = require('cookie-parser');
const cors = require('cors'); // segurança
const patch = require('path');
const routes = require('./src/routes');
const { appendFile } = require('fs');

const app = express();
const port = process.env.port || 5000;

app.use(cors()); // segurança que informa os dominios que podem usar a API

app.use(cookieParser());

app.use(express.json()); // Trocar json's entre o front e back

app.use(routes);

app.listen(port,function(){
    console.log('Server running on port ${port}');
})
