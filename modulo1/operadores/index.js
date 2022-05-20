//          ecercícios de interpretação de código


//          ecercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//c. true

console.log("d. ", typeof resultado)
//d. boolean


//          ecercício 2

//O comando prompt sempre nos retorna uma string e ao somá-las apenas concatenaríamos elas.
//Seria impresso os 2 números digitados apenas postados lado a lado e não a soma desejada.

//          ecercício 3

//Deve-se converter as strings vindas do prompt para números, da seguinte forma:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


//          Exercícios de escrita de códigos

//          exercício 1

let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmiga = Number(prompt("Qual a idade da sua amiga?"))

console.log("Sua idade é maior que a da sua amiga?", idadeUsuario > idadeAmiga)
console.log("A diferença de idade entre vocês é de", idadeUsuario - idadeAmiga, "anos.")

//          ecercício 2

let numeroPar = Number(prompt("Insira um número par:"))

console.log(numeroPar % 2)
//quando se insere um número par ele retorna resto 0, já com um número ímpar, retorna resto 1.

//          exercício 3

let idadeUsuario = Number(prompt("Qual a sua idade?"))

console.log("Você tem", idadeUsuario * 12, "meses de vida.")
console.log("Você tem", idadeUsuario * 365, "dias de vida.")
console.log("Você tem", idadeUsuario * 365 * 24, "horas de vida.")

//          exercício 4

const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite um número divisor do anterior:"))

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo número é divisível pelo primeiro?", !(segundoNumero % primeiroNumero === 0))


//          Desafios

//          Desafio 1

//          a

console.log("77 ºF equivalem à", (77 - 32)*(5/9) + 273.15, "Kelvin")

//          b

console.log("80 ºC equivalem à", 80 * (9/5) + 32, "ºF")

//          c

console.log("30 ºC equivalem à", 30 * (9/5) + 32, "ºF e a", 30 + 273.15, "K")

//          d

let temperaturaCelcius = Number(prompt("Insira uma temperatura em graus Celsius:"))

console.log(temperaturaCelcius,"ºC equivalem à", temperaturaCelcius * (9/5) + 32, "ºF e a", temperaturaCelcius + 273.15, "K")


//          Desafio 2

//          a

const preçoKWH = 0.05
const consumoKWH = 280

console.log("valor a ser pago: R$", consumoKWH / preçoKWH);

//          b

console.log("valor a ser pago com 15% de desconto: R$", (consumoKWH / preçoKWH) * 0.85);



//          Desafio 3

//          a até g

console.log("20lb equivalem a", 20 * 0.453592, "kg")
console.log("10.5oz equivalem a", 10.5 * 0.0283495, "kg")
console.log("100mi equivalem a", 100 * 1609.34, "m")
console.log("50ft equivalem a", 50 * 0.3048, "m")
console.log("103.56gal equivalem a", 103.56 * 3.78541, "l")
console.log("450xic equivalem a", 450 * 150 * 1000, "l")

console.log("450xic equivalem a", 450 * Number(prompt("Quantas xícaras deseja converter para litros?"))* 1000, "l")
