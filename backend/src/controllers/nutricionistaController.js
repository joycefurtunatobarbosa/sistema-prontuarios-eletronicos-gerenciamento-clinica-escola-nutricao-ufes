const fs = require('fs');
const opn = require('opn');
const { ObjectId } = require('mongodb');
const { param } = require('jquery');

module.exports = function (app, mongo) {

    app.get('/buscarNutricionista/:cod', async (req, res) => {
        const codNutricionista = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            const nutricionista = await colecao.findOne({ cod: codNutricionista });
            
            res.json({ nutricionista });

        } finally {
            await mongo.close();
        }
    });

    app.post('/atualizarNutricionista', async (req, res) => {
        const nutricionista = req.body.nutricionista;
        console.log(nutricionista)

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            await colecao.updateOne(
                { _id: new ObjectId(nutricionistaID) },
                { $set: nutricionista }
            );

            res.json({ message: 'Dados atualizados e salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.post('/salvarNutricionistas', async (req, res) => {
        const nutricionista = req.body.nutricionista;
        const nutricionistaID = req.body.nutricionista._id;
        delete nutricionista._id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            const ultimoNutricionistaSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            if (ultimoNutricionistaSalvo == null) {
                nutricionista.cod = 1;
            }
            else {
                nutricionista.cod = ultimoNutricionistaSalvo.cod + 1;
            }

            await colecao.insertOne(nutricionista);

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.get('/listarNutricionistas', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');
            const nutricionistas = await colecao.find().toArray();

            res.json({ nutricionistas });
        } finally {
            await mongo.close();
        }
    });

    app.post('/excluirNutricionista', async (req, res) => {
        const id = req.body.id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionista');

            await colecao.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Nutricionista excluído com sucesso!' });
        } finally {
            await mongo.close();
        }
    });

}