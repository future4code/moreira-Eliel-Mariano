import { userType } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    findByEmail = async(email:string):Promise<any>=>{
        const userEmail = await this.connection.raw(`
            SELECT id, email FROM Labook_User
            WHERE email = "${email}";
        `)
        return userEmail
    }
    
    create = async(user:userType)=>{
        await this.connection.raw(`
            INSERT INTO Labook_User (id, name, email, password)
            VALUES (
                "${user.id}",
                "${user.name}",
                "${user.email}",
                "${user.password}"
                );
        `)
    }
}