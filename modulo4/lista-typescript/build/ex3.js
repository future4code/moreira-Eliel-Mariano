var Genero;
(function (Genero) {
    Genero["ACAO"] = "a\u00E7\u00E3o";
    Genero["DRAMA"] = "drama";
    Genero["COMEDIA"] = "com\u00E9dia";
    Genero["ROMANCE"] = "romance";
    Genero["TERROR"] = "terror";
})(Genero || (Genero = {}));
const filme = ((nome, lancamento, genero, pontuacao) => {
    const dadosFilme = { nome, lancamento, genero, pontuacao };
    return dadosFilme;
});
console.log(filme("matrix", 2000, Genero.ACAO, 9.8));
//# sourceMappingURL=ex3.js.map