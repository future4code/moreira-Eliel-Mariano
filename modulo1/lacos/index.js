
//exercícios de interpretação

//1 

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) // imprime 10

//2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero) // a - imprime 19, 21, 23, 25, 27, 30
	}
}
//b - o for of é usado para acessar cada elemento do array. Faríamos da seguinte maneira:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
 	console.log(numero)
} 


//3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha) //imprime ****
  quantidadeAtual++
}




//exercícios de escrita de código

//1

const numeroBichos = Number(prompt("Quantos animais de estimação você tem?"))
const nomeBichos = []

if (numeroBichos === 0) {
    console.log("Que pena, você deveria adotar um.")
} else {
    for (let i = 0; i < numeroBichos; i++){
        nomeBichos.push(prompt("Qual o nome?"))

    }
    console.log(nomeBichos)

}


//2    

//a
const arrayOriginal = [1,2,3,4,5,6,7]

for (let i = 0; i <= arrayOriginal.length -1; i++){
    console.log(arrayOriginal[i])
}

//b
for (let i = 0; i <= arrayOriginal.length -1; i++){
    console.log(arrayOriginal[i]/10)
}

//c
const novoArray = []

for (let i = 0; i <= arrayOriginal.length -1; i++){
    if (arrayOriginal[i] % 2 === 0){
        novoArray.push(arrayOriginal[i])
    }
}
console.log(novoArray)

//d
const arrayString = []

for (let i = 0; i <= arrayOriginal.length -1; i++){
    arrayString.push(`O elemento do índice ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayString)

//e
let maiorNumero = 0
let menorNumero = 100

for (let i = 0; i <= arrayOriginal.length -1; i++){

    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    }
    if (arrayOriginal[i] < menorNumero) {
        menorNumero = arrayOriginal[i] 
    }
}
console.log(maiorNumero)
console.log(menorNumero)
