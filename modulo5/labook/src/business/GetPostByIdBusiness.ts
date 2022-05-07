import { GetPostByIdDatabase } from "../data/GetPostByIdDatabase"
import { postType } from "../types/userType"


const getPostByIdDatabase = new GetPostByIdDatabase

export class GetPostByIdBusiness{
    getPost = async (input:any):Promise<postType>=>{

        if(!input){
            throw new Error("Insira um 'id' da postagem que deseja buscar.")
        }

        const post = await getPostByIdDatabase.getPost(input)
        
        return post
    }
}