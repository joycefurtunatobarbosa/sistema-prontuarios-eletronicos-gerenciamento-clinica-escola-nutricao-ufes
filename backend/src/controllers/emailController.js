var dataAtual = new Date(Date.now());
var dataFormatada = dataAtual.toLocaleDateString('pt-BR');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabrielnama2@gmail.com',
    pass: 'drnsrubdgmxbfxub'
  }
});

module.exports = function (app) {

  const sendEmail = (to, subject, html) => {
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
                    <div style="text-align: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www.canva.com/design/DAFztYqMzFQ/Y8S3YWAnvqExaQUOQ8JfpQ/viewhttps://onedrive.live.com/embed?resid=40C2B5524225E68E%2125370&amp;authkey=!AJsa0eEkoi42vnM" alt="" /><img style="display: block; margin-left: auto; margin-right: auto;" src="https://onedrive.live.com/embed?resid=40C2B5524225E68E%2125371&amp;authkey=%21AM-IYHLTrV4wXFI&amp;width=256&amp;height=256" alt="" width="128" height="128" /><strong>Cl&iacute;nica Escola de Nutri&ccedil;&atilde;o</strong></div>
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