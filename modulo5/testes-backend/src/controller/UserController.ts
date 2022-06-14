import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   getUserById = async(req: Request, res: Response):Promise<any>=>{
      try {
         const {userId} = req.params
         console.log(userId);
         

         const user = await userBusiness.getUserById(userId)
         console.log(user);


         return user
         

         
      } catch (error) {
         const { statusCode, message }  = error
         res.status(statusCode || 400).send({ message } );
      }

   }

}

export default new UserController()