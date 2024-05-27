const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const porta = 3000;

// const conexao = 'mongodb://localhost:27017';
const conexao = 'mongodb+srv://gabrielnama:ugcYK4KayTIoRNl9@cen.vswafpl.mongodb.net/?retryWrites=true&w=majority';const mongo = new MongoClient(conexao);

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
    next();
});

// Chama os controllers e passa o servidor express e o banco mongo
require('./controllers/nutricionistaController.js')(app, mongo);
require('./controllers/arquivoController.js')(app, mongo);
require('./controllers/pacienteController.js')(app, mongo);
require('./controllers/prontuarioController.js')(app, mongo);

app.listen(porta, () => {
    console.log(`Servidor Node.js está rodando em http://localhost:${porta}`);
});
