const menorValor = 10
const maiorValor = 500
const numeroSecreto = gerarNumAleatorio()

function gerarNumAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elMenorValor = document.querySelector('#menor-valor')
elMenorValor.innerHTML = menorValor

const elMaiorValor = document.querySelector('#maior-valor')
elMaiorValor.innerHTML = maiorValor