
const anoAtual:number = 2022

function checaRenovacaoRG(anoNascimento:number, anoEmissao:number ):boolean {
    let idade:number = anoAtual - anoNascimento
    let tempoCarteira:number = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? true : false
      }else if(idade > 20 || idade <= 50) {
         return tempoCarteira >= 10 ? true : false       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? true : false       
       }else {
           return false
       }
}

console.log(checaRenovacaoRG(1984, 2006))