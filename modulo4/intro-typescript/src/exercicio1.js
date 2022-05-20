function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "escaleno";
    }
    else if (a === b && b === c) {
        return "equilátero";
    }
    else {
        return "isósceles";
    }
}
//# sourceMappingURL=exercicio1.js.map