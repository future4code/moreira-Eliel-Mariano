import { User, USER_ROLES } from "../types/types";
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
    
    getPassword = async( email:string):Promise<string>=>{

        const password = await this.connection.raw(`
            SELECT password FROM User_Arq
            WHERE email = "${email}"
        `)
        return password
    }

    getID = async( email:string):Promise<string>=>{

        const id = await this.connection.raw(`
            SELECT id FROM User_Arq
            WHERE email = "${email}"
        `)
        return id
    }

    getRole = async( email:string):Promise<USER_ROLES>=>{

        const role = await this.connection.raw(`
            SELECT role FROM User_Arq
            WHERE email = "${email}"
        `)
        return role
    }

    getEmail = async( email:string):Promise<string>=>{

        const emailUser = await this.connection.raw(`
            SELECT email FROM User_Arq
            WHERE email = "${email}"
        `)
        return emailUser
    }
}