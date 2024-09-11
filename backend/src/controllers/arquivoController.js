const path = require("path");
const multer = require("multer");
// const enviarEmail = require("./emailController");

let nome;
let localizacao;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        localizacao = req.body.fileName + " - " + Date.now() + path.extname(file.originalname);
        localizacao = localizacao.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        cb(null, localizacao);
    }
});

const upload = multer({ storage });

module.exports = function (app, mongo) {
    
    app.post('/salvarArquivo', upload.single("file"), async (req, res) => {
        try {
            mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            console.log(req.body);

            const codPaciente = req.body.cod;
            nome = req.body.fileName;

            await colecao.updateOne(
                { cod: parseInt(codPaciente) },
                { $push: { arquivos: { nome, localizacao } } }
            );

        } catch (error) {
            console.error("Erro ao adicionar nome do arquivo ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            // await mongo.close();
            // enviarEmail(req.body.email, 'Arquivo salvo com sucesso', 'Seu arquivo foi salvo com sucesso.');
        }
        res.send('Arquivo salvo com sucesso.');
    });

};
