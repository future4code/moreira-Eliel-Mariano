// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayTransição = []
    for (i = 0; i<= array.length - 1; i++){
        arrayTransição.unshift(array[i])
        
    }
    return array = arrayTransição
  
}

// EXERCÍCIO 03 ???????????????????????????????????????????
function retornaArrayOrdenado(array) {

    return array.sort()
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayTransicao = []
    for (i = 0; i<= array.length - 1; i++){        
        if (array[i] % 2 === 0){
        arrayTransicao.push(array[i])
        }
    } 
    return array = arrayTransicao
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayTransicao = []
    for (i = 0; i<= array.length - 1; i++){        
        if (array[i] % 2 === 0){
        arrayTransicao.push(array[i]**2)
        }
    } 
    return array = arrayTransicao
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)

    /* let maiorNumero
    for (i = 0; i<= array.length - 1; i++){
        if (array[i] > array[i + 1]){
            maiorNumero = array[i]
        }
    }
    return maiorNumero */
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    if (num1 > num2){
        maior = num1
        menor = num2

    } else {
        maior = num2
        menor = num1
    }

    let maiorDivMenor = (maior % menor === 0)

    let subtracao = (maior - menor)

    const objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maiorDivMenor,
        diferenca: subtracao

    }


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}