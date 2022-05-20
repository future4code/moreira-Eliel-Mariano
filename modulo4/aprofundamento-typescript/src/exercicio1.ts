//exercício 1
//a

//const minhaString:string = 10 //acusa um erro porque um número não pode ser atribuido a uma string.

//b

//const meuNumero:number = "dez" //acusa um erro porque uma string não pode ser atribuido a um número.

//c

type Pessoa={
    nome:string,
    idade:number,
    corFavorita:string
}

enum CoresDisponiveis {
    AZUL = "azul",
    VERMELHO = "vermelho",
    AMARELO = "amarelo",
    VERDE = "verde",
    ROXO = " roxo"
}

const pessoa1:Pessoa = {
    nome: "eliel",
    idade: 38,
    corFavorita: CoresDisponiveis.VERMELHO
}

const pessoa2:Pessoa = {
    nome: "Mônica",
    idade: 43,
    corFavorita: CoresDisponiveis.VERDE
}

const pessoa3:Pessoa = {
    nome: "são longuinho e estrela cadente",
    idade: 2000,
    corFavorita: CoresDisponiveis.AMARELO
}