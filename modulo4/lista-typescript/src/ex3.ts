

type Info = {
    nome:string,
    lancamento:number,
    genero:string,
    pontuacao?:number
}

enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filme = ((nome:string, lancamento:number, genero:string, pontuacao?:number):Info=>{

    const dadosFilme:Info = {nome, lancamento, genero, pontuacao}

    return dadosFilme
})

console.log(filme("matrix", 2000, Genero.ACAO, 9.8))
