const anagramas = ((palavra) => {
    let combinacoes = 1;
    for (let i = 1; i <= palavra.length; i = i + 1) {
        combinacoes = combinacoes * i;
    }
    return combinacoes;
});
console.log(anagramas("mesa"));
//# sourceMappingURL=ex9.js.map