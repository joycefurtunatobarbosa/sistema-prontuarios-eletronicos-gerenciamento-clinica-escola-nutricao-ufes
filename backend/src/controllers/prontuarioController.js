// const opn = require('opn');
const { ObjectId } = require('mongodb');

var dataAtual = new Date();
var dataOriginal = dataAtual.toLocaleDateString();

var partes = dataOriginal.split('/');
var dia = partes[1];
var mes = partes[0];
var ano = partes[2];

mes = (mes < 10) ? '0' + mes : mes;
var dataFormatada = dia + '/' + mes + '/' + ano;

console.log(dataFormatada)

module.exports = function (app, mongo) {

    app.get('/app/buscarProntuario/:cod', async (req, res) => {
        const codProntuario = parseInt(req.params.cod);
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('prontuarios');
            const prontuario = await colecao.findOne({ cod: codProntuario });
            res.json({ prontuario });
        } 
        finally {
            await mongo.close();
        }
    });

    app.post('/app/criarNovoProntuario', async (req, res) => {
        var prontuario = req.body.prontuario;
        prontuario.dataCriacao = dataFormatada;
        prontuario.dataUltimaMovimentacao = dataFormatada;
        
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('prontuarios');

            const ultimoProntuarioSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });

            if (ultimoProntuarioSalvo == null) {
                prontuario.cod = 1;
            } else {
                prontuario.cod = ultimoProntuarioSalvo.cod + 1;
            }

            let qtdProntuarioComum = parseInt(await colecao.countDocuments({ tipo: "prontuario" }));

            if (qtdProntuarioComum == null || 0) {
                prontuario.nome = "Prontuário 1";
            } else {
                qtdProntuarioComum++;
                prontuario.nome = "Prontuário " + qtdProntuarioComum;
            }
    
            await colecao.insertOne(prontuario);
    
            res.json({ prontuario });
        } catch (error) {
            console.error('Erro ao criar novo prontuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } finally {
            await mongo.close();
        }
    });

    app.post('/app/criarProntuarioRetorno', async (req, res) => {
        var prontuario = req.body.prontuario;
        const nome = prontuario.nome;
        prontuario.dataCriacao = dataFormatada;
        prontuario.dataUltimaMovimentacao = dataFormatada;
    
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('prontuarios');
    
            // const ultimoProntuarioSalvo = await colecao.findOne({}, { sort: { _id: -1 }, limit: 1 });
            
            const ultimoProntuarioSalvo = await colecao.findOne(
                { tipo: "prontuario" },
                { sort: { _id: -1 } }
            );

            let prontuarioRetorno = {};
            Object.assign(prontuarioRetorno, ultimoProntuarioSalvo);
            delete prontuarioRetorno._id;
    
            let novoCod;

            if (ultimoProntuarioSalvo == null) {
                novoCod = 1;
            } else {
                novoCod = ultimoProntuarioSalvo.cod + 1;
            }
            
            prontuarioRetorno.cod = novoCod;

            let qtdProntuarioRetorno = parseInt(await colecao.countDocuments({ tipo: "retorno" }));

            if (qtdProntuarioRetorno == null || 0) {
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
            await mongo.close();
        }
    });    

    app.post('/app/atualizarProntuariosNoPaciente', async (req, res) => {
        const prontuario = req.body.prontuario;
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
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
            await mongo.close();
        }
    }); 

    app.post('/app/salvarProntuario', async (req, res) => {
        var prontuario = req.body.prontuario;
        const codProntuario = prontuario.cod;
        prontuario.dataUltimaMovimentacao = dataFormatada;

        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('prontuarios');

            await colecao.updateOne(
                { cod: codProntuario },
                { $set: prontuario }
            );

            res.json({ message: 'Dados salvos com sucesso!' });

        } finally {
            await mongo.close();
        }
    });

    app.get('/app/listarProntuarios', async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cenufes01');
            const colecao = database.collection('prontuarios');
            const prontuarios = await colecao.find().toArray();

            res.json({ prontuarios });
        } finally {
            await mongo.close();
        }
    });

}