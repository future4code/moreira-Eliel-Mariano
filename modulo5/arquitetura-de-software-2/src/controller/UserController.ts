import { Request, Response } from "express";

import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO } from "../model/User";

export class UserController {

  async signup(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body

      const input:SignupInputDTO = {
        email, name, password
      }

      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input)

      res.send({
        message: "Usuário cadastrado com sucesso",
        token
      })
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login({ email, password })

      res.send({
        message: "Usuário logado com sucesso",
        token
      })
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message)
    }
  }
}
