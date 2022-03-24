//exercício 4

//a
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b - deve-se rodar no terminal "tsc index.ts", por exemplo, para fazer a transpilação.

//b - caso estivesse em uma pasta src, criaríamos um script, já que o tsconfig.json já está configurado.

//c - podemos fazer pelo terminal "tsc arquivo1.ts arquivo2.ts arquivo3.ts", ou através de um script.