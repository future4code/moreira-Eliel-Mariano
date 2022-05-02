import { User } from "../types/types";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    create = async(id:string,name: string, email:string, password:string, role:string)=>{

        //queries para consultar/inserir no banco de dados
        await this.connection.raw(`
        INSERT INTO User_Arq (id, name, email, password, role)
        VALUES (
            "${id}",
            "${name}",
            "${email}",
            "${password}",
            "${role}"
        );
        `)
    }    
}