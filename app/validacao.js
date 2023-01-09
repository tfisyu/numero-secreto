function validResult(chute){
    const numero = +chute
    
    if(invalidValue(numero)){
        if(chute === 'game over'){
            document.body.classList.add('game-over')
            document.body.innerHTML = `
                <h2>você desistiu. fraco.</h2>
                <button id="replay" class="btn-jogar">jogar novamente</button>
            `
        }else{

        elChute.innerHTML += '<div>valor inválido</div>'

        }
    }
    if(beyondPermited(numero)){
        elChute.innerHTML += `
        <div>o valor não está entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>finalmente acertou, filho da puta</h2>
            <h3>o número secreto era ${numeroSecreto}</h3>

            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elChute.innerHTML += `
        <div>o valor é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else if(numero < numeroSecreto){
        elChute.innerHTML += `
        <div>o valor é maior <i class="fa-solid fa-angle-up"</div>`
    }
}


function invalidValue(numero) {
    return Number.isNaN(numero)
}

function beyondPermited(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'replay'){
        window.location.reload()
    }
})
