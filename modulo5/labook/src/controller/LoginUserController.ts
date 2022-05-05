import { Request, Response } from "express";
import { LoginUserBusiness } from "../business/LoginUserBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";
import { login } from "../types/userType";

const userBusiness = new UserBusiness
const loginUserBusiness = new LoginUserBusiness

export class LoginUserContoller{

    login = async (req:Request, res:Response):Promise< any >=>{

        try {
            //entrada da requisição
            const {email, password} = req.body

            const input:login = {
                email,
                password
            }
            
            const token = await loginUserBusiness.login(input) //acessando UserBusiness e passando o Body

            //responder a requisição
            res.status(201).send({
                message:"Usuário logado com sucesso!",
                token: token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send( error.message )
            }
            res.status(500).send("Erro no servidor interno")
        }
    }
}