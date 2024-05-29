const path = require("path");
const multer = require("multer");

// let arquivo = { 
//     nome: "",
//     localizacao: "",
// };

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
    app.post('/salvarArquivo', upload.single("file"), async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            const codPaciente = req.body.cod;
            nome = req.body.fileName;

            // Atualizar o documento do paciente com o nome do arquivo
            const paciente = await colecao.updateOne(
                { cod: parseInt(codPaciente) }, // Critério de busca
                { $push: { arquivos: { nome, localizacao } } } // Usando nomeArquivo na atualização
            );

            if (paciente.modifiedCount === 1) {
                console.log("Nome do arquivo adicionado com sucesso ao paciente de código:", codPaciente);
            } else {
                console.log("Paciente não encontrado ou nenhum documento modificado.");
            }
        } catch (error) {
            console.error("Erro ao adicionar nome do arquivo ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            await mongo.close();
        }
        res.send('Arquivo salvo com sucesso.');
    });
};
