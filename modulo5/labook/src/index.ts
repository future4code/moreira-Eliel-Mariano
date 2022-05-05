import {app} from "./controller/app"
import { LoginUserContoller } from "./controller/LoginUserController"
import { UserContoller } from "./controller/UserController"


const userController = new UserContoller
const loginUserContoller = new LoginUserContoller

app.post("/signup", userController.create)
app.post("/login", loginUserContoller.login)
