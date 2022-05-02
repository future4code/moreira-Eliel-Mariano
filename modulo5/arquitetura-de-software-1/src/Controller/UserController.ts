import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";

const userBusiness = new UserBusiness

export class UserContoller{

    create = async (req:Request, res:Response):Promise< void >=>{

        try {
            //entrada da requisição
            const {name, email, password, role} = req.body
            
            //responder a requisição
            const token = await userBusiness.create(name, email, password, role) //acessando UserBusiness e passando o Body

            
            res.status(201).send({
                message:"Criado com sucesso!",
                token: token })

        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    login = async (req:Request, res:Response):Promise< any >=>{
        
        try {

            const {email, password} = req.body

            const token = await userBusiness.login(email, password)

            res.status(200).send({
                message:"Logado com sucesso!",
                token: token })
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}