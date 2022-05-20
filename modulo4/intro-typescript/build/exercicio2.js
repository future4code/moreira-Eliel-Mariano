"use strict";
function imprimeTresCoresFavoritas() {
    console.log(process.argv[2], process.argv[3], process.argv[4]);
}
(process.argv[2] && process.argv[3] && process.argv[4]) ?
    imprimeTresCoresFavoritas() :
    console.log("Digite suas três cores favoritas:");
//# sourceMappingURL=exercicio2.js.map