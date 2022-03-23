// exercício 2 

function imprimeTresCoresFavoritas ():void{
    console.log(process.argv[2], process.argv[3], process.argv[4])
 }

(process.argv[2] && process.argv[3] && process.argv[4]) ?

imprimeTresCoresFavoritas() : 

console.log("Digite suas três cores favoritas:")
