// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'gabrielnama2@gmail.com',
//         pass: 'drnsrubdgmxbfxub'
//     }
// });

const path = require("path");
const multer = require("multer");
// const enviarEmail = require("./emailController");

let nome;
let localizacao;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        localizacao = req.body.fileName + " - " + Date.now() + path.extname(file.originalname);
        localizacao = localizacao.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        cb(null, localizacao);
    }
});

const upload = multer({ storage });

module.exports = function (app, mongo) {
    // const sendEmail = (to, text) => {
    //     const mailOptions = {
    //         from: 'gabrielnama2@gmail.com',
    //         to: to,
    //         subject: 'CEN - Atualização em atendimento',
    //         text: text
    //     };

    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //         console.log('Email sent: ' + info.response);
    //     });
    // };

    // app.post('/enviarEmail', (req, res) => {

    //     // const to = req.body.paciente.nutricionista.email;
    //     // subject = 'CEN - Atualização em atendimento';
    //     // const text = req.body.mensagem;

    //     const { to, subject, text } = req.body;
    //     sendEmail(to, subject, text);
    //     // sendEmail(to, text);
    //     res.send('Email enviado com sucesso');
    // });


    app.post('/salvarArquivo', upload.single("file"), async (req, res) => {
        try {
            await mongo.connect();
            const database = mongo.db('cen');
            const colecao = database.collection('pacientes');

            const codPaciente = req.body.cod;
            nome = req.body.fileName;

            const paciente = await colecao.updateOne(
                { cod: parseInt(codPaciente) },
                { $push: { arquivos: { nome, localizacao } } }
            );

        } catch (error) {
            console.error("Erro ao adicionar nome do arquivo ao paciente:", error);
            res.status(500).send("Erro interno do servidor.");
        } finally {
            // await mongo.close();
            // enviarEmail(req.body.email, 'Arquivo salvo com sucesso', 'Seu arquivo foi salvo com sucesso.');
        }
        res.send('Arquivo salvo com sucesso.');
    });

};
