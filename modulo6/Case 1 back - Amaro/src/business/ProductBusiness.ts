import { ProductDatabase } from "../data/ProductDatabase"
import { SignupInputDTO } from "../types/signupInputDTO"
import products from "./products.json"


const productDatabase = new ProductDatabase

export class ProductBusiness{

    create = async (input:SignupInputDTO):Promise<void>=>{

        const {id, name, tags} = input

        if(!id || !name || !tags){
            throw new Error("Insira os dados id, name e tags")
        }

        const registeredProduct = await productDatabase.findById(id)
        if(registeredProduct){
            throw new Error("Produto já cadastrado")
        }

        for (let i=0; i<products.products.length-1; i++) {
            await productDatabase.create(products.products[i])
        }

        console.log(products.products.length)        

    }
}