const dados = ((nome, data) => {
    const dataSeparada = data.split("/");
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`;
});
console.log(dados("eliel", "06/maio/1984"));
//# sourceMappingURL=ex1.js.map