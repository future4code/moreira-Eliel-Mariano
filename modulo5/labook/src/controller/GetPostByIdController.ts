import { Request, Response } from "express";
import { GetPostByIdBusiness } from "../business/GetPostByIdBusiness";
import { Authenticator } from "../services/Authenticator";

const getPostByIdBusiness = new GetPostByIdBusiness

export class GetPostByIdController{

    getPost = async (req:Request, res:Response):Promise< any >=>{

        try {
            const authenticator = new Authenticator
            const token = authenticator.getTokenData(req.headers.authorization!)

            if(!token){
                res.status(401)
                throw new Error("Obrigatório ter token de autorização")
            }
            
            const input = req.params
            const post = await getPostByIdBusiness.getPost(input.id)

            res.status(200).send({
                message:"Postagem localizada com sucesso!",
                post })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send( error.message )
            }
            res.status(500).send("Erro no servidor")
        }
    }
}