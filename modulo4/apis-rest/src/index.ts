import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";


const app = express();
app.use(express.json());
app.use(cors());

const port = 3003
const server = app.listen (port, () => {
  if (server) {
    console.log(`servidor rodando em http://localhost:${port}`);
  } else {
    console.error(`falhou.`);
  }}) 


  app.get("/user", (req: Request, res: Response)=>{
    let newError:number = 400

    try {
      //const allUsers = users
      //console.log(allUsers) 
      //elimina arrays dentro de arrays: .flat(1)

      if(users===[]){
        newError = 401
        throw new Error("não existem usuários.")
      }

      const names = users.map((user)=>{
        return user.name
      })
      console.log(names)

      //res.send("criei o get")
      res.status(200).send(names)
        
      } catch (error:any) {
        res.status(newError).send(error.message)
      }

    
  })
  
//1
  //a. Qual método HTTP você deve utilizar para isso? http://localhost:3003/user

  //b. Como você indicaria a entidade que está sendo manipulada? GET

//2
  //a: criando um Type no data.ts
  /* type Usuarios = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
} */

  //b: com o enum podemos taxar o que queremos.

//3
  //a: GET

//4 b: o método PUT é usado para quando se deseja atualizar dados ja existentes, o POST para criar.