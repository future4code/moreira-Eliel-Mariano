import { PostDatabase } from "../data/PostDatabase"
import { Idgenerator } from "../services/IdGenerator"
import { PostInputDTO } from "../types/postInputDTO"
import { postType } from "../types/userType"


const postDatabase = new PostDatabase

export class PostBusiness{

    create = async (input:PostInputDTO):Promise<void>=>{

        const {photo, description, type, author_id} = input

        if(!photo || !description){
            throw new Error("Insira foto, descrição e tipo (EVENT ou NORMAL).")
        }

        const idGenerator = new Idgenerator
        const id = idGenerator.generateId()
       
        const post:postType = {id, photo, description, type, author_id}

        await postDatabase.create(post)        
    }
}