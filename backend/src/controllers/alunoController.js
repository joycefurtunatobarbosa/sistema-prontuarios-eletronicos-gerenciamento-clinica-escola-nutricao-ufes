const fs = require('fs');
const opn = require('opn');
const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.post('/salvarExame', async (req, res) => {
        console.log("Arquivo salvo.");
        const pdfBuffer = fs.readFileSync('./controllers/40924.pdf');

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            await colecao.insertOne({ pdf: pdfBuffer });

            res.json({ message: 'Arquivo salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    // Rota para enviar o arquivo
    app.post('/salvarArquivo', async (req, res) => {
        try {
            // Ler o arquivo enviado
            const arquivo = req.files && req.files.arquivo;

            if (!arquivo) {
                throw new Error('Nenhum arquivo enviado');
            }

            // Ler os dados do arquivo do sistema de arquivos
            const pdfBuffer = fs.readFileSync(arquivo.path);

            // Restante do seu código para salvar o arquivo no MongoDB...
        } catch (error) {
            console.error('Erro ao salvar o arquivo:', error);
            res.status(500).json({ error: 'Erro ao salvar o arquivo' });
        }
    });


    app.get('/exibirPDF', async (req, res) => {
        const idDocumento = "6621836e51fceda8b37734d7";

        // Conectar ao MongoDB e recuperar o documentotry {
        await mongo.connect();
        const db = mongo.db('cen');
        const colecao = db.collection('alunos');
        // const ultimoDocumento = await colecao.findOne({}, { sort: { $natural: -1 } });
        const documento = await colecao.findOne({ _id: new ObjectId(idDocumento) });

        console.log(documento);

        // Decodificar os dados binários do PDF
        const pdfBuffer = Buffer.from(documento.pdf.buffer, 'base64');

        console.log(pdfBuffer);

        // Configurar o cabeçalho da resposta como tipo de conteúdo PDF
        res.set('Content-Type', 'application/pdf');

        // Enviar os dados do PDF como resposta
        res.send(pdfBuffer);
    });

    app.post('/buscarAluno', async (req, res) => {
        const alunoID = req.body.id;
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            const aluno = await colecao.findOne({ _id: new ObjectId(alunoID) });
            res.json({ aluno });

        } finally {
            await mongo.close();
        }
    });

    app.post('/atualizarAluno', async (req, res) => {
        const aluno = req.body.aluno;
        const alunoID = aluno._id;
        delete aluno._id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            await colecao.updateOne(
                { _id: new ObjectId(alunoID) },
                { $set: aluno }
            );

            res.json({ message: 'Dados atualizados e salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.post('/salvarAluno', async (req, res) => {
        const aluno = req.body.aluno;
        const alunoID = req.body.aluno._id;
        delete aluno._id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            const ultimoAlunoSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            if (ultimoAlunoSalvo == null) {
                aluno.cod = 1;
            }
            else {
                aluno.cod = ultimoAlunoSalvo.cod + 1;
            }

            await colecao.insertOne(aluno);

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.get('/listarAlunos', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');
            const alunos = await colecao.find().toArray();

            res.json({ alunos });
        } finally {
            await mongo.close();
        }
    });

    app.post('/excluirAluno', async (req, res) => {
        const id = req.body.id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            await colecao.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Aluno excluído com sucesso!' });
        } finally {
            await mongo.close();
        }
    });

}