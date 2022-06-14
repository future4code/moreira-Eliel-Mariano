import { Request, Response } from "express";
import connection from "../connection";
import { generateId } from "../services/generateId";
import { geraToken } from "../services/generateToken";
import dotenv from 'dotenv'



export default async function createUser(req: Request,res: Response): Promise<void> {
   try {

      const { email, password } = req.body

      const id = generateId()
      //console.log(id)

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      const [user] = await connection('usuário')
         .where({ email });

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
     // console.log(id)
      console.log(email)
      console.log(password)

      await connection.raw(`
         INSERT INTO usuário
            (id, email, password)
         VALUES (
            "${id}",
            "${email}",
            "${password}"
         );
      `)
      
      const token = geraToken(id)
      console.log(token)

      res.status(201).send({token})

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}