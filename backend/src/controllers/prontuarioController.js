// const opn = require('opn');
const { ObjectId } = require('mongodb');
var dataAtual = new Date(Date.now());
var dataFormatada = dataAtual.toLocaleDateString('pt-BR');

module.exports = function (app, mongo) {

    app.get('/buscarProntuario/:cod', async (req, res) => {
        const codProntuario = parseInt(req.params.cod);
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');
            const prontuario = await colecao.findOne({ cod: codProntuario });
            res.json({ prontuario });
        }
        finally {
            // await mongo.close();
        }
    });

    app.post('/criarNovoProntuario', async (req, res) => {
        var prontuario = req.body.prontuario;
        prontuario.dataCriacao = dataFormatada;
        prontuario.dataUltimaMovimentacao = dataFormatada;
        
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');

            // Busca a quantidade total de prontuários
            var qtdProntuarios = await colecao.countDocuments({});

            // Busca o último prontuário salvo para o paciente e tipo específicos
            var ultimoProntuarioSalvo = await colecao.countDocuments({ codPaciente: prontuario.codPaciente, tipo: prontuario.tipo });

            if (qtdProntuarios === 0) {
                prontuario.cod = 1;
            } else {
                prontuario.cod = qtdProntuarios + 1;
            }

            prontuario.nome = "Prontuário " + (ultimoProntuarioSalvo + 1);

            // let qtdProntuarioComum = parseInt(await colecao.countDocuments({ tipo: "prontuario" }));

            // if (ultimoProntuarioSalvo == null || ultimoProntuarioSalvo == 0) {
            //     prontuario.nome = "Prontuário 1";
            // } else {
            //     ultimoProntuarioSalvo++;
            //     prontuario.nome = "Prontuário " + ultimoProntuarioSalvo;
            // }
    
            await colecao.insertOne(prontuario);
    
            res.json({ prontuario });
        } catch (error) {
            console.error('Erro ao criar novo prontuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } finally {
            // await mongo.close();
        }
    });

    app.post('/criarProntuarioRetorno', async (req, res) => {
        var prontuario = req.body.prontuario;
        const nome = prontuario.nome;
        prontuario.dataCriacao = dataFormatada;
        prontuario.dataUltimaMovimentacao = dataFormatada;
    
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');
    
            // const ultimoProntuarioSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            
            const ultimoProntuarioSalvo = await colecao.findOne(
                { tipo: "prontuario", codPaciente: parseInt(prontuario.codPaciente) },
                { sort: { _id: -1 } }
            );

            let prontuarioRetorno = {};
            Object.assign(prontuarioRetorno, ultimoProntuarioSalvo);
            delete prontuarioRetorno._id;
    
            let novoCod;
            // Busca a quantidade total de prontuários
            var qtdProntuarios = await colecao.countDocuments({});

            if (qtdProntuarios == 0) {
                novoCod = 1;
            } else {
                novoCod = qtdProntuarios + 1;
            }

            // if (ultimoProntuarioSalvo == null) {
            //     novoCod = 1;
            // } else {
            //     novoCod = ultimoProntuarioSalvo.cod + 1;
            // }
            
            prontuarioRetorno.cod = novoCod;

            let qtdProntuarioRetorno = parseInt(await colecao.countDocuments({ tipo: "retorno", codPaciente: parseInt(prontuario.codPaciente) }));

            if (qtdProntuarioRetorno == null || qtdProntuarioRetorno == 0) {
                prontuarioRetorno.nome = "Retorno 1";
            } else {
                qtdProntuarioRetorno++;
                prontuarioRetorno.nome = "Retorno " + qtdProntuarioRetorno;
            }

            prontuarioRetorno.tipo = "retorno";
            await colecao.insertOne(prontuarioRetorno);
            res.json({ prontuarioRetorno });
    
        } catch (error) {
            console.error('Erro ao criar novo prontuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } finally {
            // await mongo.close();
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
            
        } catch (error) {
            console.error("Erro ao adicionar prontuário ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            // await mongo.close();
        }
    }); 

    app.post('/salvarProntuario', async (req, res) => {
        var prontuario = req.body.prontuario;
        const codProntuario = prontuario.cod;
        prontuario.dataUltimaMovimentacao = dataFormatada;

        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('prontuarios');

            await colecao.updateOne(
                { cod: codProntuario },
                { $set: prontuario }
            );

            const pacientesColecao = database.collection('pacientes');
    
            await pacientesColecao.updateOne(
                { cod: parseInt(codPaciente) },
                { $set: { 
                    dataSituacao: dataFormatada
                 } }
            );

            res.json({ message: 'Dados salvos com sucesso!' });

        }
        finally {
            // await mongo.close();
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
            // await mongo.close();
        }
    });

}