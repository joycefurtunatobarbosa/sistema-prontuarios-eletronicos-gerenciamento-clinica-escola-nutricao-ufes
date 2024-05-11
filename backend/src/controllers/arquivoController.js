const path = require("path");
const multer = require("multer");
var nomeArquivo;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        nomeArquivo = req.body.fileName + " - " + Date.now() + path.extname(file.originalname);
        cb(null, nomeArquivo);
    }
});

const upload = multer({ storage });

module.exports = function (app, mongo) {
    app.post('/salvarArquivo', upload.single("file"), async (req, res) => {
        try {
            const client = await mongo.connect();
            const database = client.db('cen');
            const colecao = database.collection('pacientes');

            const codigoPaciente = 1;

            // Atualizar o documento do paciente com o nome do arquivo
            const resultado = await colecao.updateOne(
                { cod: codigoPaciente }, // Critério de busca
                { $push: { arquivos: nomeArquivo } } // Atualização
            );

            if (resultado.modifiedCount === 1) {
                console.log("Nome do arquivo adicionado com sucesso ao paciente de código:", codigoPaciente);
            } else {
                console.log("Paciente não encontrado ou nenhum documento modificado.");
            }
        } catch (error) {
            console.error("Erro ao adicionar nome do arquivo ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            await mongo.close();
        }
        res.send('Arquivo recebido com sucesso.');
    });
};