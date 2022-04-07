//elimina arrays dentro de arrays: .flat(1)
import express, { Request, Response } from "express";
import cors from "cors";
import {User, users} from "./data"

const app = express();
app.use(express.json());
app.use(cors());

const port = 3003
const server = app.listen (port, () => {
  if (server) {
    console.log(`Servidor rodando em http://localhost:${port}`);
  } else {
    console.log(`Falhou.`);
  }}) 

  
  app.post("/user", (req: Request, res: Response)=>{
    let errorCode:number = 400     

    try {
      errorCode = 201
      const {name, cpf, birthYear} = req.body //desestruturação

      const newUser:User = {
        name: name,
        cpf: cpf,
        birthYear: birthYear,
        operations: [],
        saldo: 0
      }

      if(!name || !cpf || !birthYear){
        errorCode = 422
        throw new Error ("Erro! Cehque os campos do objeto enviado.")
      }

      let age:number = 2022 - birthYear
      if(age<18){
        errorCode = 401
        throw new Error("Idade insuficiente.")
      }
      
      users.push(newUser)
      console.log(users)

      res.status(errorCode).send({mensagem:"Conta criada!"})
        
      } catch (error:any) {
        res.status(errorCode).send({mensagem: error.message})
      }
  })


  app.get("/user", (req: Request, res: Response)=>{
    let errorCode:number = 400

    try {

      errorCode = 200
      const nameUsers = users.map(({name})=>{
        return name
      })
      console.log(nameUsers)
      
      if(users.length===0){
        errorCode = 200
        throw new Error("Não há usuários cadastrados.")
      }

      res.status(errorCode).send({mensagem:"Lista de usuários cadastrados."})

    } catch (error:any) {
      res.status(errorCode).send({mensagem: error.message})
    }
  })


  app.get(`/user/saldo`, (req: Request, res: Response)=>{
    let errorCode:number = 400

    try {
      errorCode = 200

      const name = req.query.name
      const cpf = Number(req.query.cpf)
      //console.log(name)
      //console.log(cpf)

      const checkDados = users.map(({name, cpf})=>{
        return [name, cpf]
      }).flat(1)
      //console.log(checkDados)

      const checkName = checkDados.findIndex((index)=>{
        return name === index
      })
      //console.log(checkName)

      if( checkName === -1){
        errorCode = 200
        throw new Error("Usuário não encontrado.")
      }
      
      const checkCpf = checkDados.findIndex((index)=>{
        return cpf === index
      })
      //console.log(checkCpf)

      if( checkCpf === -1){
        errorCode = 200
        throw new Error("CPF não encontrado.")
      }


      const userFilter = users.filter((user)=>{
        return user.name === name
      })
      //console.log(userFilter)
      
      const userSaldo = userFilter.map(({operations, name, cpf})=>{ // de todos, colocar para 1 apenas
        let saldo = 0
        for (let i = 0; i<= operations.length - 1; i++){
          saldo = saldo + operations[i]
        }
        return `Cliente: ${name}, CPF: ${cpf}, Saldo em conta: ${saldo}.`
      })      
      
      res.status(errorCode).send({mensagem: userSaldo})

    } catch (error:any) {
      res.status(errorCode).send({mensagem: error.message})
    }
  })





