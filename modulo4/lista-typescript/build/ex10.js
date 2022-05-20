const checaCPF = ((cpf) => {
    const arrayCPF = Array.from(String(cpf), Number);
    const array2 = arrayCPF.splice(0, 9);
    let soma1 = 0;
    for (let i = 0; i <= array2.length - 1; i++) {
        soma1 = soma1 + Math.abs(array2[i] * (array2.length + 1 - i));
    }
    let primeiroDigito = 11 - (soma1 % 11);
    if (primeiroDigito >= 10) {
        primeiroDigito = 0;
    }
    const arrayCPF2 = Array.from(String(cpf), Number);
    const array3 = arrayCPF2.splice(0, 10);
    let soma2 = 0;
    for (let i = 0; i <= array3.length - 1; i++) {
        soma2 = soma2 + Math.abs(array3[i] * (array3.length + 1 - i));
    }
    let segundoDigito = 11 - (soma2 % 11);
    if (segundoDigito >= 10) {
        segundoDigito = 0;
    }
    const arrayCPF4 = Array.from(String(cpf), Number);
    const array4 = arrayCPF4.splice(0, 11);
    return primeiroDigito === array4[array4.length - 2] && segundoDigito === array4[array4.length - 1];
});
checaCPF(14538220620);
//# sourceMappingURL=ex10.js.map