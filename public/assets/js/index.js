const _ = require("lodash")

async function sortear() {
    try {
        const numInicial =  document.getElementById('numInicial')
        const numFinal = document.getElementById('numFinal')
        const numSorteado = _.random(numInicial, numFinal)

        return {
            Numero_Inicial: numInicial,
            Numero_Final: numFinal,
            Numero_Sorteado: numSorteado
        }

    } catch (error) {
        console.error('Deu erro ao sortear!', error);
    }
}

document.addEventListener("btn_sortear", function () {
    el.addEventListener("submit", sortear, false);
  });