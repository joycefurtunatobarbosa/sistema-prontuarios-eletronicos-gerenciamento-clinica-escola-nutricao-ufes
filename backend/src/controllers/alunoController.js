const fs = require('fs');
const opn = require('opn');
const { ObjectId } = require('mongodb');
const { param } = require('jquery');

module.exports = function (app, mongo) {

    app.get('/buscarAluno/:cod', async (req, res) => {
        const codigoAluno = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('alunos');

            const aluno = await colecao.findOne({ cod: codigoAluno });
            
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