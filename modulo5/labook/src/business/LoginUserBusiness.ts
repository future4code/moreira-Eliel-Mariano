import { compare } from "../../services/hashManager"
import { generateToken } from "../../services/authenticator"
import { UserDatabase } from "../data/UserDatabase"
import { SignupInputDTO } from "../types/signupInputDTO"
import { SignupOutputDTO } from "../types/signupOutputDTO"


const userDatabase = new UserDatabase

export class UserBusiness{

    create = async (input:SignupInputDTO)=>{
        let statusCode:number = 400

        //validacao do body
        const {email, password} = input
        if(!email || !password){
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        //conferir se o usuario existe ?? qual tipo??
        const user:SignupOutputDTO = await (findByEmail(email)) //função a ser criada indo para UserDatabase 
        
        if(!user){
            throw new Error("Usuário não encontrado")
        }

        //verificar senha
        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Senha incorreta")
        }

        //criar o token
        const token: string = generateToken({
            id: user.id,
            role: user.role
         })

        return token
    }
}