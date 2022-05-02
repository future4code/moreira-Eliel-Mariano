import {app} from "./Controller/app"
import { UserContoller } from "./Controller/UserController"


const userController = new UserContoller

app.post("/signup", userController.create)
