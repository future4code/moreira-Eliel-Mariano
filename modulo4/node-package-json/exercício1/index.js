// exercício 1 - a
//para acessarmos os parâmetros passados no terminal para o node usamos o process.argv[i]

//exercício 1 - b

(process.argv[2] && process.argv[3]) ?

console.log("\x1b[31m%s\x1b[0m", `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`) :

console.log("Por favor, digite seu nome e sua idade.")

// exercício 1 - c

(process.argv[2] && process.argv[3]) ?

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3])+7} anos.`) :

console.log("Por favor, digite seu nome e sua idade.")