/* //exercício de interpretação de código
// execício 1 de variáveis

let a = 10
let b = 10

console.log (b) // imprime 10

b = 5

console.log (b) // imprime 5

// exercício 2 de variáveis

let a = 10
let b = 20
c = a // variável c nao foi criada, retorna erro
b = c // variável b não recebe c, string sem aspas
a = b // variável a recebe variável b = 20

console.log (a, b, c)

//imprimi 20, 20, undefined

// exercício 3 de variáveis

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
//pergunta ao usuário no navegador e atribui a string à variável

let valorDaDiaria = prompt("Quanto você recebe por dia?")
//pergunta ao usuário no navegador e atribui a string à variável

alert("Você recebe ${valorDaDiaria/horasPorDia} por hora")]
//imprimi uma caixa de diálogo dizendo "Você recebe ${valorDaDiaria/horasPorDia} por hora" : uma string */



// Ecercício de escrita de código

//exercício 1

/* let nome
let idade

console.log(typeof nome, idade)
//imprime undefined porque as variáveis estão vazias

nome = prompt("Qual seu nome, abestado?")
idade = prompt("E a sua idade?")

console.log("meu nome é",nome , "e minha idade é",idade)

console.log(typeof nome, typeof idade)
//são duas variáveis do tipo string vindas do prompt

console.log("Olá",nome,", você tem",idade,"anos.") */


//exercício 2


/* let usaOculos = prompt("Você usa óculos?")
let camisaDeTime = prompt("Está de camisa de time?")
let descalso = prompt("Está descalso?")

console.log("Você usa óculos?",usaOculos)
console.log("Está de camisa de time?",camisaDeTime)
console.log("Está descalso?",descalso) */


//exercício 3


/* let a = 10
let b = 25
let c

console.log("Valor atual de a:",a)
console.log("Valor atual de b:",b)

console.log("invertendo os valores entre a e b")

c = a
a = b
b = c
c = null

console.log("Novo valor de a:",a)
console.log("Novo valor de b:",b) */


//desafio


let a = prompt("Digite o primeiro número:")
let b = prompt ("Agora digite o segundo número:")

a = Number(a) //conversão da string em número
b = Number(b) //conversão da string em número

console.log(typeof a)
console.log(typeof b)

console.log("A soma entre eles é:",a+b)
console.log("A multiplicação entre eles é:",a*b)

