// Exercícios de interpretação de código

//exercício 1

let array
console.log('a. ', array) //a. undefined

array = null
console.log('b. ', array) //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) //e. [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //f. 9

// exercício 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//ecercício 1

let nome = prompt("Digite seu nome:")
let email = prompt("Digite seu e-mail:")

console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem vinda(o),", nome,".")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}.`)

//exercício 2 

//a
const comidasPreferidas = ["pizza", "costela", "fígado", "feijoada", "bacon"]

console.log(comidasPreferidas)

//b
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c

let usuarioPidao = prompt("Com qual comida deseja substiruir a costela?")

comidasPreferidas.splice(1,1)

comidasPreferidas.push(usuarioPidao)

console.log(comidasPreferidas)

//exercício 3 

const listaDeTarefas = []

const tarefa1 = prompt("Diga uma tarefa que você deve realizar diariamante:")
const tarefa2 = prompt("Diga-me outra tarefa:")
const tarefa3 = prompt("E agora uma última tarefa:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const indiceTarefa = Number(prompt("Escolha a tarefa 1, 2 ou 3 para retirarmos da lista:"))

listaDeTarefas.splice(indiceTarefa -1, indiceTarefa - 1)

console.log(listaDeTarefas)


// DESAFIO 

// 1 

const converteEmArray = prompt("Digite uma frase:")

const convertida = converteEmArray.split(" ")

console.log(convertida)

// 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi") , frutas.length)
