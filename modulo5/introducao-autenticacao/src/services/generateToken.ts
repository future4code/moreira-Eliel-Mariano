import * as jwt from "jsonwebtoken"
import { generateId } from "./generateId";

type AuthenticationData = {
    id: string;
  }


export const geraToken = (input:any):string =>{
    const token = jwt.sign(
        {id: input.id},
        String(process.env.JWT_KEY),
        {expiresIn: "1h"}
    )
    return token
}

console.log(geraToken(generateId))