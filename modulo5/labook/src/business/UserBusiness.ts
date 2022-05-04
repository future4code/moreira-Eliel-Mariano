import { UserDatabase } from "../data/UserDatabase"
import { HashManager } from "../services/HashManager"
import { Idgenerator } from "../services/IdGenerator"
import { SignupInputDTO } from "../types/signupInputDTO"
import { User } from "../types/userType"


const userDatabase = new UserDatabase

export class UserBusiness{

    create = async (input:SignupInputDTO)=>{

        //validacao do body
        const {name, email, password} = input

        if(!email || !name || !password){
            throw new Error("Insira os campos: nome, email e senha.")
        }

        //conferir se o usuario existe
        const registeredUser = await userDatabase.findByEmail(email)
        if(registeredUser){
            throw new Error("Email já cadastrado")
        }

        //criar uma id pro usuario
        const idGenerator = new Idgenerator
        const id = idGenerator.generateId()

        //hashear o password
        const hashManager = new HashManager
        const hashPassword = await hashManager.hash(password)

        //criar o usuario no banco
        const user = new UserDatabase
        await userDatabase.create( )


        //criar o token

        //retornar o token
        const token = 1

        return token
    }
}