//exercicio 2

//a - tem como entrada um array "números" e tem como saída um objeto "estatísticas."

function obterEstatisticas(numeros:number[]):{} {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {
        maior:number,
        menor:number,
        media:number
    } = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }

    return estatisticas
}

//b - um array de números "numerosOrdenados", uma constante numérica "soma", um objeto de números "estatisticas"

//c

const amostraDeIdades:{
    numeros:number[],
    obterEstatisticas:{}
} = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros:number[]) => {
    }
}