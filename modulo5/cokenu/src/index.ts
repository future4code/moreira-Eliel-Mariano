import {app} from "./app"
import { createRecipe } from "./endpoints/endpoints/createRecipe"
import { getAnotherUserProfile } from "./endpoints/endpoints/getAnotherUserProfile"
import { getRecipe } from "./endpoints/endpoints/getRecipe"
import { getUserProfile } from "./endpoints/endpoints/getUserProfile"
import { login } from "./endpoints/endpoints/login"
import { signup } from "./endpoints/endpoints/signup"


app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', getUserProfile)
app.get('/user/:id', getAnotherUserProfile)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)