// const { param } = require('jquery');
const { ObjectId } = require('mongodb');
var dataAtual = new Date(Date.now());
var dataFormatada = dataAtual.toLocaleDateString('pt-BR');

module.exports = function (app, mongo) {

    mongo.connect();

    app.post('/atenderPaciente', async (req, res) => {
        const nutricionista = req.body.nutricionista;
        const codPaciente = req.body.codPaciente;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const pacientesColecao = database.collection('pacientes');

            const pacienteNoBanco = await pacientesColecao.updateOne(
                { cod: codPaciente },
                {
                    $set: {
                        nutricionista: { cod: nutricionista.cod, nome: nutricionista.nome },
                        dataInicio: dataFormatada,
                        situacao: "Atendimento iniciado",
                        dataSituacao: dataFormatada,
                        status: "Em atendimento",
                    }
                }
            );

            if (pacienteNoBanco.modifiedCount === 1) {
                res.json({ message: 'O paciente começou a ser atendido.' });
            } else {
                res.status(404).json({ error: 'Paciente não encontrado.' });
            }

        } catch (error) {
            console.error("Erro ao atender paciente:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.post('/alterarSituacao', async (req, res) => {
        const codPaciente = req.body.codPaciente;
        const novaSituacao = req.body.novaSituacao;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const pacientesColecao = database.collection('pacientes');

            const paciente = await pacientesColecao.updateOne(
                { cod: parseInt(codPaciente) },
                {
                    $set: {
                        situacao: novaSituacao,
                        dataSituacao: dataFormatada
                    }
                }
            );

            if (paciente.modifiedCount === 1) {
                res.json({ message: 'O paciente começou a ser atendido.' });
            } else {
                res.status(404).json({ error: 'Paciente não encontrado.' });
            }

        } catch (error) {
            console.error("Erro ao atender paciente:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.post('/finalizarAtendimento', async (req, res) => {
        const codPaciente = req.body.cod;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const pacientesColecao = database.collection('pacientes');

            const paciente = await pacientesColecao.updateOne(
                { cod: parseInt(codPaciente) },
                {
                    $set: {
                        situacao: "Atendimento finalizado em " + dataFormatada,
                        status: "Finalizado",
                        dataSituacao: dataFormatada
                    }
                }
            );

            if (paciente.modifiedCount === 1) {
                res.json({ message: 'O atendimento do paciente foi finalizado.' });
            } else {
                res.status(404).json({ error: 'Paciente não encontrado.' });
            }

        } catch (error) {
            console.error("Erro ao finalizar atendimento do paciente:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.post('/nutricionistaAtenderPaciente', async (req, res) => {
        const codNutricionista = req.body.codNutricionista;
        const codPaciente = req.body.codPaciente;
        const nomePaciente = req.body.nomePaciente;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const nutricionistasColecao = database.collection('nutricionistas');

            const nutricionista = await nutricionistasColecao.updateOne(
                { cod: codNutricionista },
                { $addToSet: { pacientes: { cod: codPaciente, nome: nomePaciente } } }
            );

            if (nutricionista.modifiedCount === 1) {
                res.json({ message: 'O nutricionista está atendendo o paciente.' });
            } else {
                res.status(404).json({ error: 'Nutricionista ou paciente não encontrados.' });
            }

        } catch (error) {
            console.error("Erro ao atender paciente:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    // CRUD

    app.get('/buscarPaciente/:cod', async (req, res) => {
        const codPaciente = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            const paciente = await colecao.findOne({ cod: codPaciente });

            res.json({ paciente });

        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.get('/listarPacientes', async (req, res) => {
        mongo.connect();
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');
            const pacientes = await colecao.find().toArray();

            res.json({ pacientes });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.post('/atualizarPaciente', async (req, res) => {
        const paciente = req.body.paciente;
        const pacienteID = paciente._id;
        delete paciente._id;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            await colecao.updateOne(
                { _id: new ObjectId(pacienteID) },
                { $set: paciente }
            );

            res.json({ message: 'Dados atualizados e salvos com sucesso!' });

        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.post('/salvarPaciente', async (req, res) => {
        const paciente = req.body.paciente;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            const qtdPacientes = await colecao.countDocuments();

            if (qtdPacientes == 0) {
                paciente.cod = 1;
            }
            else {
                paciente.cod = qtdPacientes + 1;
            }

            await colecao.insertOne(paciente);

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            // await mongo.close();
        }
    });

    app.get('/excluirPaciente/:cod', async (req, res) => {
        const codPaciente = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');
            await colecao.deleteOne({ cod: codPaciente });

        } catch (error) {
            console.error('Erro ao excluir paciente:', error);
            res.status(500).json({ message: 'Erro ao excluir paciente' });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    app.get('/excluirPacienteNoNutricionista/:codNutricionista/:codPaciente', async (req, res) => {
        const codNutricionista = parseInt(req.params.codNutricionista);
        const codPaciente = parseInt(req.params.codPaciente);

        try {
            await mongo.connect();

            const database = mongo.db('cen');
            const colecao = database.collection('nutricionistas');
            const nutricionista = await colecao.findOne({ cod: codNutricionista });

            if (!nutricionista) {
                return res.status(404).json({ message: 'Nutricionista não encontrado' });
            }

            // Encontrar o índice do paciente dentro do array pacientes do nutricionista
            const indicePaciente = nutricionista.pacientes.findIndex(paciente => paciente.cod === codPaciente);

            if (indicePaciente === -1) {
                // Se não encontrar o paciente, retorna 404
                return res.status(404).json({ message: 'Paciente não encontrado no nutricionista' });
            }

            // Remover o paciente do array pacientes
            nutricionista.pacientes.splice(indicePaciente, 1);

            await colecao.updateOne({ cod: codNutricionista }, { $set: { pacientes: nutricionista.pacientes } });

            res.status(200).json({ message: 'Paciente excluído do nutricionista com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir paciente:', error);
            res.status(500).json({ message: 'Erro ao excluir paciente do nutricionista' });
        } finally {
            // await mongo.close();
            limparData();
        }
    });

    function limparData() {
        // Limpa as variáveis de data para corrigir o problema de repetição de data anterior no servidor
        delete dataAtual;
        delete dataFormatada;
    }

}