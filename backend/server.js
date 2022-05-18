const express = require("express")
const cors = require("cors")
const app = express()
const path = require('path');
const DataBase = require("../frontend/assets/js/index")
const bodyParser = require("body-parser")
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/pages'));

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

app.listen(PORT, () => { console.log(`SERVIDOR ONLINE --> http://localhost:${PORT}/`)
})