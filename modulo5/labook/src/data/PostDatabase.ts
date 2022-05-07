import { postType } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    create = async(post:postType)=>{
        await this.connection.raw(`
            INSERT INTO Labook_Posts (id, photo, description, type, author_id)
            VALUES(
                "${post.id}",
                "${post.photo}",
                "${post.description}",
                "${post.type}",            
                "${post.author_id}"
                );
        `)
    }    
}