const opn = require('opn');
const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.post('/buscarAluno', async (req, res) => {
        const alunoID = req.body.id;
        try {
            await mongo.connect();
            const database = mongo.db('alunosServidores');
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
            const database = mongo.db('alunosServidores');
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
            const database = mongo.db('alunosServidores');
            const colecao = database.collection('alunos');

            const ultimoAlunoSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            if (ultimoAlunoSalvo == null){
                aluno.cod = 1;
            }
            else{
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
            const database = mongo.db('alunosServidores');
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
            const database = mongo.db('alunosServidores');
            const colecao = database.collection('alunos');

            await colecao.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Aluno excluído com sucesso!' });
        } finally {
            await mongo.close();
        }
    });

}