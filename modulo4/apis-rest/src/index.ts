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
    
  })
  