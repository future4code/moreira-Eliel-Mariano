/* // exercício 1 - a
//para acessarmos os parâmetros passados no terminal para o node usamos o process.argv[i]

//exercício 1 - b

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// exercício 1 - c

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3])+7} anos.`)

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

//exercício 3

const lista = ["abrir o terminal", "git pull", "code ."]

lista.push(process.argv[2])

console.log(lista) */

