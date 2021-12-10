// blackjack

console.log("Boas vindas ao jogo BlackJack!!!")


let somaHumano

function cartasHumano (){
   let carta1Humano = comprarCarta()
   let carta2Humano = comprarCarta()
   somaHumano = carta1Humano.valor + carta2Humano.valor
   
   console.log(`Humano, suas 2 cartas são ${carta1Humano.texto} e ${carta2Humano.texto} - Pontuação: ${somaHumano}`)
   
}

let somaComputador

function cartasComputador (){
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   somaComputador = carta1Computador.valor + carta2Computador.valor
   
   console.log(`Computador, suas 2 cartas são ${carta1Computador.texto} e ${carta2Computador.texto} - Pontuação: ${somaComputador}`)
   
}


if (confirm("Quer iniciar uma nova rodada?")) {
   cartasHumano()
   cartasComputador()
   if (somaHumano > somaComputador) {
      console.log("Humano, você ganhou!!!")
   } else if (somaHumano < somaComputador) {
         console.log("O Computador ganhou!!!")
   } else {
         console.log("Empate!!!")
   } 
} else {
   console.log("O jogo acabou!")
}








