async function sortear() {
    try {

        const numInicial = document.getElementById('numInicial')
        const numeroInicial = numInicial.value

        const numFinal = document.getElementById('numFinal')
        const numeroFinal = numFinal.value

        console.log(numeroInicial, numeroFinal);

    } catch (error) {
        console.error("Deu erro na inserção", error)
    }
}

const formSorteio = document.getElementById('numeros');
formSorteio.addEventListener('submit', (e) => {
    e.preventDefault();
    sortear()
})