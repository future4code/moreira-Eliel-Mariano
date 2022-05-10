interface Character {
    nome: string
    vida: number
    defesa: number
    força: number
}

export const validateCharacter = ((input:Character):boolean=>{

    if(!input.nome || input.defesa === undefined || input.força === undefined || input.vida === undefined){
        return false
    }

    if(input.defesa <= 0 || input.força <= 0 || input.vida <= 0){
        return false
    }

    return true
})


export const performAttack = ((
    attacker:Character,
    defender:Character
    ): string | boolean=>{

    const validationResultAttacker = validateCharacter(attacker)
    const validationResultDefender = validateCharacter(defender)

    if(!validationResultAttacker || !validationResultDefender){
        return false
    }

    let damage:number = 0
    let life:number = defender.vida

    if(attacker.força > defender.defesa){
        damage = attacker.força - defender.defesa
        life = life - damage
    }
    console.log(`Lutador ${defender.nome} sofreu ${damage} e restou ${life} de vida.`);
        
    return `Lutador ${defender.nome} sofreu ${damage} e restou ${life} de vida.`
})


export const performAttackInjection = ((
    attacker:Character,
    defender:Character,
    validator:(input)=>Character
    ):boolean | string=>{

    const validationResultAttacker = validator(attacker)
    const validationResultDefender = validator(defender)

    if(!validationResultAttacker || !validationResultDefender){
        return false
    }

    let damage:number = 0
    let life:number = defender.vida

    if(attacker.força > defender.defesa){
        damage = attacker.força - defender.defesa
        life = life - damage
    }
    console.log(`Lutador ${defender.nome} sofreu ${damage} e restou ${life} de vida.`)

    return `Lutador ${defender.nome} sofreu ${damage} e restou ${life} de vida.`

})