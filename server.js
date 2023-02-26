const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
//const DataBase = require("./public/assets/js/script");
const bodyParser = require("body-parser");
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  app.use(cors());
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/"));

app.get("/sorteador", async (req, res) => {

});

/* app.get("/detalhes/:id", urlencoded, async function (req, res) {
    const IMGPATH = "https://image.tmdb.org/t/p/w500"
    const movieId = req.params.id
    const detalhesFilme = await searchMovie.searchMovieId(movieId)
    res.render("./main", { pageCurrent: './pag_detalhes.ejs', detalhesFilme, IMGPATH })
  }) */

app.get("/", async function (req, res) {
  //const sorteio = await DataBase.sorteador();
  res.render("./pages/main", { pageInicial: "./layouts/index.ejs"/* , sorteio  */});
});

app.listen(PORT, async () => {
  console.info(`⚡️Server is running at http://localhost:${PORT}`);
});
