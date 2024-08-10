const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Carregar as credenciais SSL
const privateKey = fs.readFileSync('./private.key', 'utf8');
const certificate = fs.readFileSync('./certificate.crt', 'utf8');
const ca = fs.readFileSync('./ca_bundle.crt', 'utf8');

// Credenciais para HTTPS
const credentials = { key: privateKey, cert: certificate, ca: ca };

// Inicializar o aplicativo Express
const app = express();

// Servir os arquivos estáticos do Vue.js
app.use(express.static(path.join(__dirname, 'dist')));

// Rota padrão que serve o arquivo `index.html` para todas as requisições
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Criar o servidor HTTPS
const httpsServer = https.createServer(credentials, app);

// Ouvir em uma porta segura (por exemplo, 443)
httpsServer.listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443');
});
