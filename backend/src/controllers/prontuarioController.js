const opn = require('opn');
const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.get('/buscarProntuario/:cod', async (req, res) => {
        const codigoProntuario = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');
            const prontuario = await colecao.findOne({ cod: codigoProntuario });

            res.json({ prontuario });
        } finally {
            await mongo.close();
        }
    });

    app.post('/salvarProntuario', async (req, res) => {
        const prontuario = req.body.preProntuario;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');

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

            res.json({ prontuarios });
        } finally {
            await mongo.close();
        }
    });

}