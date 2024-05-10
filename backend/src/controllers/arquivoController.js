const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, req.body.fileName + " - " + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = function (app, mongo) {
    app.post('/salvarArquivo', upload.single("file"), (req, res) => {
        console.log("Arquivo recebido:", req.file);
        console.log("Nome do arquivo:", req.body.fileName);
        res.send('Arquivo recebido com sucesso.');
    });
};
