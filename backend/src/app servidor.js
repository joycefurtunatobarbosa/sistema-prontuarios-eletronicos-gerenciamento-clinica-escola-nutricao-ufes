const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const https = require('https');

// Defina a porta para HTTPS
const porta = 21058;

// Carregar chave privada e certificados SSL
const options = {
    key: fs.readFileSync('/private.key'),
    cert: fs.readFileSync('/certificate.crt'),
    // Se houver um certificado intermediário, adicione-o assim:
    ca: fs.readFileSync('/intermediate.crt') // opcional, caso tenha
};

// String de conexão do MongoDB
const conexao = 'mongodb+srv://gabrielnama:ugcYK4KayTIoRNl9@cen.vswafpl.mongodb.net/?retryWrites=true&w=majority';
const mongo = new MongoClient(conexao);

const app = express();

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
require('./controllers/emailController.js')(app);

// Cria o servidor HTTPS
https.createServer(options, app).listen(porta, () => {
    console.log(`Servidor Node.js está rodando em https://localhost:${porta}`);
});
