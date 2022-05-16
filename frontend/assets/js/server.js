const express = require("express")
const app = express()
const path = require('path');
const DataBase = require("./index")
const bodyParser = require("body-parser")
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './../../../frontend'));

app.get("/sorteador", async (req, res) => {
    const sorteio = await DataBase.sorteador({
        Numero_Inicial: req.body.numInicial,
        Numero_Final: req.body.numFinal
    });
    res.send(sorteio);
})

//rota da pagina incial
app.get("/", function (req, res) {
    res.render("./pages/main", { pageInicial: './layouts/index.ejs' })
})

app.listen(PORT, () => { console.log(`SERVIDOR ONLINE --> http://localhost:${PORT}/`)
})