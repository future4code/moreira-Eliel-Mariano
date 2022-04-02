const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
const estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const estoqueOrdenado = (() => {
    const novoPreco = estoque.map((item) => {
        item.valorUnitario = ajustaPreco(item.valorUnitario);
        return item;
    });
    const ordenado = novoPreco.sort((a, b) => {
        return b.quantidade - a.quantidade;
    });
    return ordenado;
});
console.log(estoqueOrdenado());
//# sourceMappingURL=ex7.js.map