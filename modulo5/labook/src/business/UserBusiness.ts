import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { Idgenerator } from "../services/IdGenerator"
import { SignupInputDTO } from "../types/signupInputDTO"
import { userType } from "../types/userType"


const userDatabase = new UserDatabase

export class UserBusiness{

    create = async (input:SignupInputDTO):Promise<string>=>{

        //validacao do body
        const {name, email, password} = input

        if(!email || !name || !password){
            throw new Error("Insira os campos: nome, email e senha.")
        }

        //conferir se o usuario existe
        const registeredUser = await userDatabase.findByEmail(email)
        if(registeredUser === email){
            throw new Error("Email já cadastrado")
        }

        //criar uma id pro usuario
        const idGenerator = new Idgenerator
        const id = idGenerator.generateId()

        //hashear o password
        const hashManager = new HashManager
        const hashPassword:string = await hashManager.hash(password)

        //criar o usuario no banco
        const user:userType = {id, name, email, password: hashPassword}

        await userDatabase.create(user)

        //criar o token
        const authenticator = new Authenticator
        const token = authenticator.generateToken({id})

        return token
    }
}