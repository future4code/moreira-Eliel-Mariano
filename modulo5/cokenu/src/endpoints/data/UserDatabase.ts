import { Response } from "express";
import { User } from "../entities/User";
import { BaseDatebase } from "./BaseDatebase";


export class UserDatabase extends BaseDatebase {

    public getUserByEmail = async (email: string, res?: Response): Promise<User> => {
        try {
            const [user] = await BaseDatebase.connection('Cokenu_User')
                .select()
                .where('Cokenu_User.email', `${email}`)

            if (!user) {
                res?.status(404).send({ message: 'E-mail não cadastrado, informe um email válido.' })
            }

            const novoUser = user && User.toUserModel(user)
            return novoUser

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserById = async (id: string, res?: Response): Promise<User> => {
        try {
            const [user] = await BaseDatebase.connection('Cokenu_User')
                .select()
                .where('Cokenu_User.id', `${id}`)

            if (!user) {
                res?.status(404).send({ message: 'Esse usuáro não existe, informe um id válido' })
                throw new Error()
            }

            const novoUser = user && User.toUserModel(user)
            return novoUser

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public createUser = async (user: User): Promise<void> => {
        try {
            await BaseDatebase.connection('Cokenu_User')
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}