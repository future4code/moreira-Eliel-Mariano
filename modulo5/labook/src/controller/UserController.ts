import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

const userBusiness = new UserBusiness

export class UserContoller{

    create = async (req:Request, res:Response):Promise< any >=>{

        try {
            //entrada da requisição
            const {name, email, password} = req.body

            const input: SignupInputDTO ={
                name,
                email,
                password
            }
            
            const token = await userBusiness.create(input) //acessando UserBusiness e passando o Body

            //responder a requisição
            res.status(201).send({
                message:"Usuário cadastrado com sucesso!",
                token: token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send( error.message )
            }
            res.status(500).send("Erro no signup")
        }
    }
}