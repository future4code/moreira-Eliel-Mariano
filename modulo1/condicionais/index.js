
//exercícios de interpretação

//1 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a - pede ao usuário um número e nos diz se ele é divisível por 2

//b - imprimi para os números pares

//c - imprime para os números ímpares

//2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a - identifica uma fruta com seu respectivo preço

//b - 2.25

//c - 5.5     break;  default: preco = 5

//3 

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a - pedindo uma informação ao usuário e a convertendo em número

//b - com 10: "Esse número passou no teste" "Essa mensagem é secreta!!!"
//com - 10: "Essa mensagem é secreta!!!"

//c - não haverá erros.


//exercício de escrita de código

//1 

const idade = Number(prompt("qual sua iadade?"))

if (idade >= 18){
    console.log("você pode dirigir")
} else {
    console.log("você não pode dirigir")
}

//2 

const turnoDeEstudo = prompt("você estuda de manhã -M, de tarde -V, ou a noite -N?")

if (turnoDeEstudo === "M"){
    console.log("bom dia!")
} else if (turnoDeEstudo === "V"){
    console.log("boa tarde!")
} else if(turnoDeEstudo === "N") {
    console.log("boa noite!")
}


//3 

const turnoDeEstudo = prompt("você estuda de manhã -M, de tarde -V, ou a noite -N?")

switch (turnoDeEstudo) {
    case "M":
        console.log("bom dia!")
        break

    case "V":
        console.log("boa tarde!")
        break
    
    case "N":
        console.log("boa noite!")
        break
    default:
}


//4 

const genero = prompt("qual o gênero do filme?")
const valor = Number(prompt("qual preço do ingresso?"))

if (genero === "fantasia" && valor <= 15){
    console.log("bom filme!")
} else {
    console.log("escolha outro filme, seu dureba!")
}