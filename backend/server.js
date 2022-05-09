const express = require("express")
const app = express()
const path = require('path');
const DataBase = require("./controller/numerosAleatorios")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 3003;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './../frontend/pages'));

app.get("/sorteador", async (req, res) => {
    const sorteio = await DataBase.sorteador({
        Numero_Inicial: req.body.numInicial,
        Numero_Final: req.body.numFinal
    });
    res.send(sorteio);
})

//rota da pagina incial
app.get("/", function (req, res) {
    res.render("./main", { pageInicial: './layouts/index.ejs' })
})

app.listen(PORT, () => { console.log(`SERVER ON PORT: http://localhost:3003/`) })