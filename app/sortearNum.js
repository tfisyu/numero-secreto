const menorValor = 10
const maiorValor = 500
const numeroSecreto = gerarNumAleatorio(menorValor, maiorValor)

function gerarNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(numeroSecreto)

const elMenorValor = document.querySelector('#menor-valor')
elMenorValor.innerHTML = menorValor

const elMaiorValor = document.querySelector('#maior-valor')
elMaiorValor.innerHTML = maiorValor
