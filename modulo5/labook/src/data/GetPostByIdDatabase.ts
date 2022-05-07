import { postType } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class GetPostByIdDatabase extends BaseDatabase {

    getPost = async(postId:any): Promise<postType>=>{
        const post = await this.connection.raw(`
            SELECT * FROM Labook_Posts
            WHERE id = "${postId}";
        `)
        return post[0]
    }    
}

