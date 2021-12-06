/*
//exercícios de interpretação

// 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //{canal: "Globo", horario: "14h"}

//2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //{	nome: "Juca", 	idade: 3, 	raca: "SRD"}
console.log(gato) //{	nome: "Juba", 	idade: 3, 	raca: "SRD"}
console.log(tartaruga) //{	nome: "Jubo", 	idade: 3, 	raca: "SRD"}

// b -  a sintaxe dos 3 pontos copia o objeto por inteiro, permitindo alterações

//3 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //undefined
console.log(minhaFuncao(pessoa, "altura")) //undefined

//b - existe um erro no return da função

// exercícios de escrita de código

//1 

//a

const pessoa = {
    nome: "eliel",
    apelidos: ["snake", "manu", "liel"]
}

function exercicio(pessoa) {

    return console.log("meu nome é", pessoa.nome, "e também sou chamado de", pessoa.apelidos[0], pessoa.apelidos[1], pessoa.apelidos[2])

}

exercicio(pessoa)

//b

const novaPessoa = {
    ...pessoa,
    apelidos: ["apelido1", "apelido2", "apelido3"]
}

exercicio(novaPessoa)


//2 

//a 

const dados1 = {
    nome: "eliel",
    idade: 37,
    profissao: "engenheiro de cana"
}

const dados2 = {
    nome: "teste",
    idade: 37,
    profissao: "dev"
}

function array (dados) {
    return [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length ]
}

console.log(array(dados1))
console.log(array(dados2))

//3 */

const carrinho = []

const fruta1 = {
    nome: "laranja",
    disponibilidade: true
}

const fruta2 = {
    nome: "abacaxi",
    disponibilidade: true
}

const fruta3 = {
    nome: "kiwi",
    disponibilidade: true
}

function compras (frutas) {
    carrinho.push(frutas)
}

compras(fruta1)
compras(fruta2)
compras(fruta3)

console.log(carrinho)



