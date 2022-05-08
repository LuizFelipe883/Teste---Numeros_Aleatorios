const express = require("express")
const app = express()
const DataBase = require("./NumerosAleatorios")
const bodyParser = require("body-parser")
const PORT = 3003;
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/sorteador", async (req, res) => {
    const sorteio = await DataBase.sorteador({
        Numero_Inicial: req.body.numInicial,
        Numero_Final: req.body.numFinal
    });
    res.send(sorteio);
})


app.listen(PORT, ()=>{console.log(`SERVER ON PORT: ${PORT}`)})