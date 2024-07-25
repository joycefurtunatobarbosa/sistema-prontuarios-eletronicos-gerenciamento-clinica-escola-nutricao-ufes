var dataAtual = new Date(Date.now());
var dataFormatada = dataAtual.toLocaleDateString('pt-BR');

// require('dotenv').config();
require('dotenv').config({ path: '/.env' });
// require('dotenv').config({ path: '../../.env' });
const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS
//   }
// });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "gabrielnama2",
    pass: "drnsrubdgmxbfxub"
  }
});

module.exports = function (app) {

  const sendEmail = (to, subject, html) => {
    console.log("Chegou aqui")
    const mailOptions = {
      from: 'gabrielnama2@gmail.com',
      to: to,
      subject: subject,
      // text: text
      html: html
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });
  };

  app.post('/enviarEmail', (req, res) => {

    const { to, subject } = req.body;
    const html = `<!DOCTYPE html>
                    <html>
                    <head>
                    </head>
                    <body>
                    <div>
                    <div>${req.body.text}</div>
                    <div>&nbsp;</div>
                    <div><strong>Nutricionista:</strong> ${req.body.nutricionista.nome}</div>
                    <div><strong>Data da atualiza&ccedil;&atilde;o:</strong> ${dataFormatada}</div>
                    <div>&nbsp;</div>
                    <div style="text-align: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://onedrive.live.com/embed?resid=40C2B5524225E68E%2125371&authkey=%21AM-IYHLTrV4wXFI&width=256&height=256" alt="" width="128" height="128" /><strong>Cl&iacute;nica Escola de Nutri&ccedil;&atilde;o</strong></div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    </div>
                    <div id="gtx-trans" style="position: absolute; left: 2px; top: 173.205px;">
                    <div class="gtx-trans-icon">&nbsp;</div>
                    </div>
                    </body>
                  </html>`;
    sendEmail(to, subject, html);
    // sendEmail("isabellaperoso@gmail.com", subject, html);
    sendEmail("gabrielnama2@gmail.com", subject, html);
    res.send('Email enviado com sucesso');

    // Limpa as variáveis de data para corrigir o problema de repetição de data anterior no servidor
    delete dataAtual;
    delete dataFormatada;
  }
  );
}