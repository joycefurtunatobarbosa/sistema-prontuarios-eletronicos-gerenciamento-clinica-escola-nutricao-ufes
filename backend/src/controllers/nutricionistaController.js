const { ObjectId } = require('mongodb');

module.exports = function (app, mongo) {

    app.post('/fazerLogin', async (req, res) => {
        const usuario = req.body.username;
        const senha = req.body.password;

        if (!usuario || !senha) {
            return res.status(404).json({ error: 'Usuário ou senha inválidos.' });
        }

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');

            const nutricionista = await colecao.findOne({ usuario: usuario });

            if (!nutricionista) {
                return res.status(404).json({ error: 'Usuário não encontrado.' });
            }

            if (nutricionista.usuario === usuario && nutricionista.senha === senha) {
                nutricionista.senha = undefined;
                nutricionista._id = undefined;

                let usuario = {
                    cod: nutricionista.cod,
                    nome: nutricionista.nome,
                    email: nutricionista.email,
                    tipo: nutricionista.tipo,
                };

                return res.json({ usuario });
            }

            if (nutricionista.usuario === usuario && nutricionista.senha !== senha) {
                return res.status(404).json({ error: 'Senha inválida.' });
            }

            return res.status(404).json({ error: 'Usuário ou senha inválidos.' });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            // Certifique-se de fechar a conexão com o MongoDB aqui, se necessário.
            // await mongo.close();
        }
    });

    app.get('/listarNutricionistas', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');
            // const nutricionistas = await colecao.find().toArray();
            const nutricionistas = await colecao.find({ tipo: "comum" }).toArray();

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