const fs = require('fs');
const opn = require('opn');
const { ObjectId } = require('mongodb');
const { param } = require('jquery');

var dataAtual = new Date(Date.now());
var dataFormatada = dataAtual.toLocaleDateString();

module.exports = function (app, mongo) {

    app.get('/buscarPaciente/:cod', async (req, res) => {
        const codigoPaciente = parseInt(req.params.cod);

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            const paciente = await colecao.findOne({ cod: codigoPaciente });

            res.json(paciente);

        } catch (error) {
            console.error("Erro ao buscar paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            await mongo.close();
        }
    });

    app.get('/listarPacientes', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');
            const pacientes = await colecao.find().toArray();

            res.json({ pacientes });
        } finally {
            await mongo.close();
        }
    });

    app.post('/atenderPaciente', async (req, res) => {
        const nutricionista = req.body.nutricionista;
        const paciente = req.body.paciente;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const pacientesColecao = database.collection('pacientes');
    
            const paciente = await pacientesColecao.updateOne(
                { cod: paciente.cod },
                { $set: { 
                    nutricionista: {cod: nutricionista.cod, nome: nutricionista.nome},
                    dataInicio: dataFormatada,
                    situacao: "Atendimento iniciado",
                    dataSituacao: dataFormatada,
                    status: "Em atendimento",
                 } }
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
            await mongo.close();
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
                { $set: { 
                    situacao: novaSituacao,
                    dataSituacao: dataFormatada
                 } }
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
            await mongo.close();
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
                { $set: { 
                    situacao: "Atendimento finalizado em " + dataFormatada,
                    status: "Finalizado",
                    dataSituacao: dataFormatada
                } }
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
            await mongo.close();
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
            await mongo.close();
        }
    });    

}