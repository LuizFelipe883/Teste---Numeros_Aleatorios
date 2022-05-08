const _ = require("lodash")

async function sorteador(sorteio) {

    const numInicial = sorteio.Numero_Inicial
    const numFinal = sorteio.Numero_Final

    const numSorteado = _.random(numInicial, numFinal)

    console.log(sorteio,`Numero Sorteado: ${numSorteado}`)

    try {
       
        return {
            Numero_Inicial: numInicial,
            Numero_Final: numFinal,
            Numero_Sorteado: numSorteado
        }

    } catch (error) {
        console.error('Deu erro ao sortear!', error);
    }
}

module.exports = { sorteador }