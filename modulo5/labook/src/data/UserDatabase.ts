import { userType } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    findByEmail = async(email:string):Promise<any>=>{
        await this.connection.raw(`
            SELECT email FROM Labook_User
            WHERE email = "${email}";
        `)
        return email
    }
    
    create = async(user:userType)=>{
        await this.connection.raw(`
            INSERT INTO Labook_User (id, name, email, password)
            VALUES
                ("${user.id}", "${user.name}", "${user.email}", "${user.password}");
        `)
    }    
}