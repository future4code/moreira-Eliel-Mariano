import { validateCharacter } from "../src"

describe("Testando validateCharacter", ()=>{

    test("Deve retornar false para nome vazio.", ()=>{
        const result = validateCharacter({
            nome: "",
            vida: 20,
            defesa: 5,
            força: 7
        })
        expect(result).toBe(false)
    })

    test("Deve retornar false para vida = 0.", ()=>{
        const result = validateCharacter({
            nome: "Riu",
            vida: 0,
            defesa: 5,
            força: 7
        })
        expect(result).toBe(false)
    })

    test("Deve retornar false para defesa = 0.", ()=>{
        const result = validateCharacter({
            nome: "Riu",
            vida: 10,
            defesa: 0,
            força: 7
        })
        expect(result).toBe(false)
    })

    test("Deve retornar false para força = 0.", ()=>{
        const result = validateCharacter({
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 0
        })
        expect(result).toBe(false)
    })

    test("Deve retornar false para vida ou força ou defesa < 0.", ()=>{
        const result = validateCharacter({
            nome: "riu",
            vida: 10,
            defesa: -5,
            força: -7
        })
        expect(result).toBe(false)
    })

    test("Deve retornar true para todas entradas válidas.", ()=>{
        const result = validateCharacter({
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        })
        expect(result).toBe(true)
    })
})
