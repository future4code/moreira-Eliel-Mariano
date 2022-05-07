import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { Authenticator } from "../services/Authenticator";
import { PostInputDTO } from "../types/postInputDTO";

const postBusiness = new PostBusiness

export class PostController{

    create = async (req:Request, res:Response):Promise< any >=>{

        try {
            const authenticator = new Authenticator
            const token = authenticator.getTokenData(req.headers.authorization!)
            console.log(token)            

            if(!token){
                res.status(401)
                throw new Error("Obrigatório ter token de autorização")
            }
            
            const {photo, description, type} = req.body

            const input: PostInputDTO ={
                photo,
                description,
                type,
                author_id: token.id
            }
            
            const id = await postBusiness.create(input)

            res.status(201).send({
                message:"Postagem realizada com sucesso!",
                id })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send( error.message )
            }
            res.status(500).send("Erro no servidor")
        }
    }
}