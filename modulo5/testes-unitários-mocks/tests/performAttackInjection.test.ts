import { performAttackInjection } from "../src"

describe("Testando validateCharacter", ()=>{

    test("Deve retornar false para nome vazio, a partir da função mockada.", ()=>{
        const attacker = {
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        }
        const defender = {
            nome: "",
            vida: 20,
            defesa: 3,
            força: 9
        }

        const validatorMock = jest.fn(()=>{
            return false
        })

        const result = performAttackInjection(attacker, defender, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Deve retornar false para vida = 0, a partir da função mockada.", ()=>{
        const attacker = {
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        }
        const defender = {
            nome: "Balrog",
            vida: 0,
            defesa: 3,
            força: 9
        }

        const validatorMock = jest.fn(()=>{
            return false
        })

        const result = performAttackInjection(attacker, defender, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Deve retornar false para defesa = 0, a partir da função mockada.", ()=>{
        const attacker = {
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        }
        const defender = {
            nome: "Balrog",
            vida: 10,
            defesa: 0,
            força: 9
        }

        const validatorMock = jest.fn(()=>{
            return false
        })

        const result = performAttackInjection(attacker, defender, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Deve retornar false para força = 0, a partir da função mockada.", ()=>{
        const attacker = {
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        }
        const defender = {
            nome: "Balrog",
            vida: 10,
            defesa: 3,
            força: 0
        }

        const validatorMock = jest.fn(()=>{
            return false
        })

        const result = performAttackInjection(attacker, defender, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Deve retornar true para todas entradas válidas, a partir da função mockada", ()=>{
        const attacker = {
            nome: "Riu",
            vida: 10,
            defesa: 5,
            força: 7
        }
        const defender = {
            nome: "Balrog",
            vida: 10,
            defesa: 3,
            força: 10
        }

        const validatorMock = jest.fn(()=>{
            return true
        })

        const result = performAttackInjection(attacker, defender, validatorMock as any)

        expect(result).toBe(true)
    })

    
})

