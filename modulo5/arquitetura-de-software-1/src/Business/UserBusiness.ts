import { UserDatabase } from "../Data/UserDatabase"
import { Authenticator } from "../Services/authenticator"
import { HashManager } from "../Services/hashManager"
import { generateId } from "../Services/idGenerator"
import { User } from "../types/types"

const userDatabase = new UserDatabase
const hashManager = new HashManager
const autenticator = new Authenticator

export class UserBusiness{

    create = async (name: string, email:string, password:string, role:string)=>{

        //validar todas as requisições
        if (!name || !email || !password || !role){
            throw new Error("Preencha os campos necessários.")
        }

        if(email.indexOf("@") === -1){
            throw new Error("Email inválido");
        }

        if(password.length < 6){
            throw new Error("Senha deve conter 6 ou mais caracteres.");
        }

        const id:string = generateId()
        const hashPassword = await hashManager.hash(password)
        await userDatabase.create(id, name, email, hashPassword, role)
        const token = autenticator.generateToken({id})

        //validar saídas do banco
        if (!token){
            throw new Error("Erro ao gerar o token")
        }
        return token
    }
}