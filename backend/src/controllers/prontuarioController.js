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
        } 
        finally {
            await mongo.close();
        }
    });

    app.post('/criarNovoProntuario', async (req, res) => {
        const prontuario = req.body.prontuario;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');

            // Consultar a coleção para obter o último código de prontuário
            const ultimoProntuarioSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
    
            // Se houver um último prontuário na coleção, incrementar o código
            if (ultimoProntuarioSalvo == null) {
                prontuario.cod = 1;
            } else {
                // Se não houver prontuários na coleção, começar a partir do código 1
                prontuario.cod = ultimoProntuarioSalvo.cod + 1;
            }
    
            // Inserir o novo prontuário na coleção
            await colecao.insertOne(prontuario);
    
            // res.json({ message: 'Dados salvos com sucesso!' });
            res.json({ prontuario });
        } catch (error) {
            console.error('Erro ao criar novo prontuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } finally {
            await mongo.close();
        }
    });

    app.post('/criarProntuarioRetorno', async (req, res) => {
        const prontuario = req.body.prontuario;
        const nome = prontuario.nome;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');
    
            // Consultar a coleção para obter o último código de prontuário
            const ultimoProntuarioSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            
            let prontuarioRetorno = {};
            Object.assign(prontuarioRetorno, ultimoProntuarioSalvo);
            delete prontuarioRetorno._id;
    
            let novoCod;
    
            // Se houver um último prontuário na coleção, incrementar o código
            if (ultimoProntuarioSalvo == null) {
                novoCod = 1;
            } else {
                // Se não houver prontuários na coleção, começar a partir do código 1
                novoCod = ultimoProntuarioSalvo.cod + 1;
            }
    
            prontuarioRetorno.nome = nome;
            prontuarioRetorno.cod = novoCod;

            // Inserir o novo prontuário na coleção
            await colecao.insertOne(prontuarioRetorno);
    
            res.json({ prontuarioRetorno });
    
        } catch (error) {
            console.error('Erro ao criar novo prontuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } finally {
            await mongo.close();
        }
    });    

    app.post('/atualizarProntuariosNoPaciente', async (req, res) => {
        const prontuario = req.body.prontuario;
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');
    
            const codigoPaciente = prontuario.codPaciente;

            const prontuarioPaciente = {
                cod: prontuario.cod,
                nome: prontuario.nome
            };
    
            const paciente = await colecao.updateOne(
                { cod: codigoPaciente },
                { $push: { prontuarios: prontuarioPaciente } }
            );
    
            if (paciente.modifiedCount === 1) {
                console.log("Prontuário adicionado com sucesso ao paciente de código:", codigoPaciente);
                res.send('Prontuário salvo com sucesso.');
            } else {
                console.log("Paciente não encontrado ou nenhum documento modificado.");
                res.status(404).send('Paciente não encontrado.');
            }
        } catch (error) {
            console.error("Erro ao adicionar prontuário ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            await mongo.close();
        }
    }); 

    app.post('/salvarProntuario', async (req, res) => {
        const prontuario = req.body.prontuario;

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