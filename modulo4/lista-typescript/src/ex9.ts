



const anagramas = ((palavra:string):number=>{

    let combinacoes:number = 1

    for(let i=1; i <= palavra.length; i = i+1){
        combinacoes = combinacoes * i
    }

    return combinacoes
})

console.log(anagramas("mesa"))