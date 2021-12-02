
//exercícios de interpretação do código

//1 a  

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //imprime 10
console.log(minhaFuncao(10)) //imprime 50

//1 b

function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
//a função seria invocada e executada porém nada seria impresso no console

//2 a  

let textoDoUsuario = prompt("Insira um texto"); //abre uma janela para o usuário inserir uma informação

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") //transforma todo texto que contém a palavra cenoura em minúsculo
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//2 b 
    //i - eu gosto de cenoura
    //ii - cenoura é com pra vista
    //iii - cenouras crescem na terra


// exercícios de escrita de código

//1

//a   

const nome = "Eliel"
const idade = 37
const cidade = "Juiz de Fora"
const profissao = "estudante"

function informacoes(){

    console.log("Eu sou o", nome, ", tenho", idade, "anos, moro em", cidade, "e sou", profissao, "de DEV.")
    console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} de DEV.`)

}

informacoes()

//b    

function informacoes2(nome, idade, cidade, profissao){

    console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} de DEV.`)

}

informacoes2("Eliel", 37, "Juiz de Fora", "estudante")


//2

//a   

function soma2Num(a, b){

    const soma = a + b

    return resultado = soma
}

const resultadoSoma = soma2Num(5,3)
console.log(resultadoSoma)
//ou
console.log(soma2Num(2,3))

//b 

function maiorIgual(a, b){

    a >= b

    return resultado = a >= b
}
console.log("O primeiro número é maior que o segundo?" , maiorIgual(4, 3))
console.log("O primeiro número é maior que o segundo?" , maiorIgual(4, 7))

//c 

function ePar(numero){

    return numero % 2 === 0

}

console.log("O número é par?", ePar(15))
console.log("O número é par?", ePar(16))

//d 

function frase(mensagem){

    console.log(mensagem.length , mensagem.toLowerCase())
}

frase("TESTANDO mais uma vez")


//3   

function soma(num1, num2){

    console.log("Soma:", num1 + num2)
}

function subtracao(num1, num2){

    console.log("Subtração:",num1 - num2)
}

function multiplicacao(num1, num2){

    console.log("Multiplicação:",num1 * num2)
}

function divisao(num1, num2){

    console.log("Divisão:",num1 / num2)
}

const num1 = Number(prompt("Insira um número:"))
const num2 = Number(prompt("Insira outro número:"))

console.log("Números inseridos:", num1, "e", num2)

soma(num1, num2)
subtracao(num1, num2)
multiplicacao(num1, num2)
divisao(num1, num2)


// DESAFIO


//1    

//a

const imprime = (parametro) => {

    console.log(parametro)
}

//b

const soma = (num1, num2) => {

    return num1 + num2
}

imprime(soma(2,8))

//2    

function teoremaDePitagoras(cateto1, cateto2){

    const hipotenusa = ((cateto1)**2 + (cateto2)**2)**(1/2)
    return hipotenusa
}

console.log(teoremaDePitagoras(3,4))