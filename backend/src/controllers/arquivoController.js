const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/salvarExame', async (req, res) => {
    const alunoID = req.body.id;
    try {
        await mongo.connect();
        const database = mongo.db('cen');
        const colecao = database.collection('alunos');

        const aluno = await colecao.findOne({ _id: new ObjectId(alunoID) });
        res.json({ aluno });

    } finally {
        await mongo.close();
    }
});