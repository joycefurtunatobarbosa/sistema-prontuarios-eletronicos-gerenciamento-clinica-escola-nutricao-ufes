const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.get('/listarNutricionistas', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');
            const nutricionistas = await colecao.find().toArray();

            res.json({ nutricionistas });
        } finally {
            // await mongo.close();
        }
    });

    app.get('/buscarNutricionista/:cod', async (req, res) => {
        const codNutricionista = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            const nutricionista = await colecao.findOne({ cod: codNutricionista });
            
            res.json({ nutricionista });

        } finally {
            // await mongo.close();
        }
    });

    app.post('/atualizarNutricionista', async (req, res) => {
        const nutricionista = req.body.nutri;
        const nutricionistaID = nutricionista._id;
        delete nutricionista._id;

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
            // await mongo.close();
        }
    });

    app.post('/salvarNutricionista', async (req, res) => {
        const nutricionista = req.body.nutri;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            const qtdNutricionistas = await colecao.countDocuments();

            if (qtdNutricionistas == 0) {
                nutricionista.cod = 1;
            }
            else {
                nutricionista.cod = qtdNutricionistas + 1;
            }

            await colecao.insertOne(nutricionista);

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            // await mongo.close();
        }
    });

    app.get('/excluirNutricionista/:cod', async (req, res) => {
        const codNutricionista = parseInt(req.params.cod);
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');
            await colecao.deleteOne({ cod: codNutricionista });

        } catch (error) {
            console.error('Erro ao excluir nutricionista:', error);
            res.status(500).json({ message: 'Erro ao excluir nutricionista' });
        } finally {
            // await mongo.close();
        }
    });
}