const path = require("path");
const multer = require("multer");

let nome;
let localizacao;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        localizacao = req.body.fileName + " - " + Date.now() + path.extname(file.originalname);
        cb(null, localizacao);
    }
});

const upload = multer({ storage });

module.exports = function (app, mongo) {
    app.post('/app/salvarArquivo', upload.single("file"), async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('pacientes');

            const codPaciente = req.body.cod;
            nome = req.body.fileName;

            const paciente = await colecao.updateOne(
                { cod: parseInt(codPaciente) },
                { $push: { arquivos: { nome, localizacao } } }
            );
            
        } catch (error) {
            console.error("Erro ao adicionar nome do arquivo ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            await mongo.close();
        }
        res.send('Arquivo salvo com sucesso.');
    });
};
