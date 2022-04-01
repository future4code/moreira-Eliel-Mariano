//elimina arrays dentro de arrays: .flat(1)
import express, { Request, Response } from "express";
import cors from "cors";

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

      
      /* if(){
        newError = 401
        throw new Error("não existem usuários.")
      } */

      
      res.status(200).send("teste")
        
      } catch (error:any) {
        res.status(newError).send(error.message)
      }
  })