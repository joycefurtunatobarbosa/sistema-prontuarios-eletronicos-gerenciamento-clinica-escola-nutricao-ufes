const fs = require('fs');
const opn = require('opn');
const { ObjectId } = require('mongodb');

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
        const codAluno = req.body.codAluno;
        const codPaciente = req.body.codPaciente;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const pacientesColecao = database.collection('pacientes');
    
            const resultado = await pacientesColecao.updateOne(
                { cod: codPaciente },
                { $set: { 
                    nutricionistasCod: codAluno,
                    status: "Em atendimento"
                 } }
            );
    
            if (resultado.modifiedCount === 1) {
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
    
    app.post('/alunoAtenderPaciente', async (req, res) => {
        const codAluno = req.body.codAluno;
        const codPaciente = req.body.codPaciente;
        const nomePaciente = req.body.nomePaciente;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const alunosColecao = database.collection('alunos');
    
            const resultado = await alunosColecao.updateOne(
                { cod: codAluno },
                { $addToSet: { pacientes: { cod: codPaciente, nome: nomePaciente } } }
            );
    
            if (resultado.modifiedCount === 1) {
                res.json({ message: 'O aluno está atendendo o paciente.' });
            } else {
                res.status(404).json({ error: 'Aluno ou paciente não encontrados.' });
            }
    
        } catch (error) {
            console.error("Erro ao atender paciente:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        } finally {
            await mongo.close();
        }
    });    

}