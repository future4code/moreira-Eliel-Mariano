import app from "./app"
import axios from 'axios'
import { User } from "./types"
import { connection } from "./data/connection"


const baseUrl = "https://viacep.com.br/ws"

export const getAdress =async (CEP:string):Promise<User | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${CEP}/json/`)
        const dados:User = {
            CEP: response.data.cep,
            Logradouro: response.data.logradouro,
            Número: response.data.ibge,
            Complemento: response.data.complemento,
            Bairro: response.data.bairro,
            Cidade: response.data.localidade,
            Estado: response.data.uf
        }
        
        connection.raw(`
        INSERT INTO adress
            (CEP, Logradouro, Número, Complemento, Bairro, Cidade, Estado)
        VALUES (
            ${dados.CEP},
            ${dados.Logradouro},
            ${dados.Número},
            ${dados.Complemento},
            ${dados.Bairro},
            ${dados.Cidade},
            ${dados.Estado}
        )
        `)
        .then(() => { console.log("Tabelas criadas") })
        .catch(() => { console.log("Erro ao inserir dados na tabela!") })

        return dados
        
    } catch (error) {
        console.log(error)
    }
    return null
}


getAdress("36050330")
