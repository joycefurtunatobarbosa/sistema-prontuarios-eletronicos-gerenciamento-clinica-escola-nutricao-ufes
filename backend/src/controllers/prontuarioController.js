const opn = require('opn');
const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.post('/salvarProntuario', async (req, res) => {
        const prontuario = req.body.preProntuario;
        // const prontuarioID = req.body.prontuario._id;
        // delete prontuario._id;
        console.log(prontuario);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');

            // const ultimoAlunoSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            // if (ultimoAlunoSalvo == null){
            //     aluno.cod = 1;
            // }
            // else{
            //     aluno.cod = ultimoAlunoSalvo.cod + 1;
            // }

            await colecao.insertOne(prontuario);

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.get('/listarProntuarios', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');
            const prontuarios = await colecao.find().toArray();
            console.log("BANCO DE DADOS: ", prontuarios);

            res.json({ prontuarios });
        } finally {
            await mongo.close();
        }
    });

}