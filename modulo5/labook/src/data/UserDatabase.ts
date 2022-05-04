import { userType } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    findByEmail = async(email:string):Promise<any>=>{
        await this.connection.raw(`
            SELECT email FROM Labook
            WHERE email = ${email}
        `);
    }
    
    create = async(user:userType)=>{

        //queries para consultar/inserir no banco de dados
        await this.connection.raw(``)


    }    
}