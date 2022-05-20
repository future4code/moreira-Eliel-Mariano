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

    return array = array.sort()
  
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

    let maiorDivMenor = maior % menor === 0

    let subtracao = maior - menor

    const objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maiorDivMenor,
        diferenca: subtracao
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayNumeros = []
    let numero = 0
    for (i = 1; i <= 2*n; i++){
        if (numero % 2 === 0){
            arrayNumeros.push(numero)
        }
        numero = numero + 1
    }
    return arrayNumeros   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC ){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10 ??????????????????????????????????????
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = []
    novoArray.push(array.Math.max(2))
    novoArray.push(array.Math.min(2))
    return novoArray
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamada = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return (`Venha assistir ao filme ${chamada.nome}, de ${chamada.ano}, dirigido por ${chamada.diretor} e estrelado por ${chamada.atores[0]}, ${chamada.atores[1]}, ${chamada.atores[2]}, ${chamada.atores[3]}.`)
}


// EXERCÍCIO 12 ????????????????????????????????????????/
function retornaPessoaAnonimizada(pessoa) {
    let dados = {
        nome: 'eliel',
        idade: 37,
        email: 'teste@teste',
        endereco: 'jf'
    }
    
    let dadosAnonimos = {
        ...dados,
        nome: 'ANÔNIMO'
    }
    return dadosAnonimos
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