// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura:"))
  const largura = Number(prompt("Digite a largura:"))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite que você nasceu:"))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   peso
   altura
   return imc = peso / (altura)**2
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite o seu nome:")
  const idade = Number(prompt("Digite sua idade:"))
  const email = prompt("Digite o seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita:")
  const cor2 = prompt("Digite sua segunda cor favorita:")
  const cor3 = prompt("Digite sua terceira cor favorita:")

  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const magica = array[array.length - 1]

  array[array.length - 1] = array[0]

  array[0] = magica

  return array
}

// EXERCÍCIO 12  ?????????????
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1.toLowercase()
  string2.toLowercase()
  
  return string1.toLowercase() === string2.toLowercase()
}

// EXERCÍCIO 13 ???????????????S
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual?"))
  const anoNascimento = Number(prompt("Ano de nascimento?"))
  const anoEmissao = Number(prompt("Ano de emissão da sua carteira?"))

  const idade = anoAtual - anoNascimento
  const tempoCarteira = anoAtual - anoEmissao

  
  console.log(((idade) <= 20 )&&((tempoCarteira) >= 5)
  || ((((idade) > 20 ) || ((idade) === 50 ))&&((tempoCarteira) >= 10))
  || (((idade) >= 50 )&&((tempoCarteira) = 15)))


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}