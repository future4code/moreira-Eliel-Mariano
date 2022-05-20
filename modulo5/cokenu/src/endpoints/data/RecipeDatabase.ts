import { Recipe } from "../entities/Recipe"
import { BaseDatebase } from "./BaseDatebase"
import { Response } from "express"


export class RecipeDatabase extends BaseDatebase {

    public registerRecipe = async (recipe: Recipe): Promise<void> => {
        try {
            await BaseDatebase.connection('Cokenu_Recipes')
                .insert({
                    id: recipe.getId(),
                    user_id: recipe.getUserId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creation_date: recipe.getDate()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getRecipeById = async (id: string, res?: Response): Promise<Recipe> => {
        try {
            const [recipe] = await BaseDatebase.connection('Cokenu_Recipes')
                .select()
                .where('Cokenu_Recipes.id', `${id}`)

            if (!recipe) {
                res?.status(404).send({ message: "Essa receita não existe, informe um id válido" })
            }

            const newRecipe = recipe && Recipe.toRecipeModel(recipe)
            return newRecipe

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    
    public deleteRecipe = async (id: string): Promise<void> => {
        try {
            await BaseDatebase.connection('Cokenu_Recipes')
                .where('Cokenu_Recipes.id', `${id}`)
                .delete()

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
