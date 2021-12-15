

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

   // será impresso 
    [{ nome: "Amanda Rangel", apelido: "Mandi" }, 0, usuarios
    { nome: "Laís Petra", apelido: "Laura" }, 1, usuarios
    { nome: "Letícia Chijo", apelido: "Chijo" } 2, usuarios ]


//2 

    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
      ]
      
      const novoArrayB = usuarios.map((item, index, array) => {
         return item.nome
      })
      
      console.log(novoArrayB) // [Amanda Rangel, Laís Petra, Letícia Chijo]


//3 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) // [{ nome: "Amanda Rangel", apelido: "Mandi" },  { nome: "Laís Petra", apelido: "Laura" },] 



// exerccícios de escrita de código

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a

function nomeBichim(item, indice, array) {
    return item.nome
}

const listaNomes = pets.map(nomeBichim)

console.log(listaNomes)

//b

function cachorroSalsicha(item, indice, array) {
    return item.raca === "Salsicha"
}

const listaSalsicha = pets.filter(cachorroSalsicha)

console.log(listaSalsicha)

//c

function cachorroPoodle(item, indice, array) {
    return item.raca === "Poodle"
}

const listaPoodle = pets.filter(cachorroPoodle)

for (i = 0; i <= listaPoodle.length -1; i++) {   
    console.log(`Você ganhou um cupom de 10% de desconto para tosar o(a) ${listaPoodle[i].nome}!`)
}


//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a

 function itensMercado (item, indice, array) {
     return item.nome
 }

 const nomeItem = produtos.map(itensMercado)

 console.log(nomeItem)

 //b

 function comDesconto (item, indice, array){
     return {nome: item.nome ,
            preco: item.preco * 0.95}
 }

 const novosPreços = produtos.map(comDesconto)

 console.log(novosPreços)


 //c

 function soBebidas (item, indice, array){
     return item.categoria === "Bebidas"
 }

 const itensBebidas = produtos.filter(soBebidas)

 console.log(itensBebidas)


 //d

 function soYpe(item, indice, array){
     if (item.nome.includes("Ypê") === true){
        return item
     }
 }

 const contemYpe = produtos.filter(soYpe)

 console.log(contemYpe)

 //e

 const compreYpe = []
 
 for (i = 0; i <= contemYpe.length-1; i++){
        compreYpe.push(`Compre ${contemYpe[i].nome} por R$ ${contemYpe[i].preco} reais.`)
     }

 console.log(compreYpe)
  