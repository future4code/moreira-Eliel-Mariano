//exercício 2


if (process.argv[2] === "Adição"){
    console.log(`Adição: ${Number(process.argv[3]) + Number(process.argv[4])}`)
} else {
    if (process.argv[2] === "Subtração"){
        console.log(`Subtração: ${Number(process.argv[3]) - Number(process.argv[4])}`)
    } else {
        if (process.argv[2] === "Multiplicação"){
            console.log(`Multiplicação: ${Number(process.argv[3]) * Number(process.argv[4])}`)
        } else {
            if (process.argv[2] === "Divisão"){
                console.log(`Divisão: ${Number(process.argv[3]) / Number(process.argv[4])}`)
            }
        }
    }
}