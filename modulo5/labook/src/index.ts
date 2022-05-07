import {app} from "./controller/app"
import { GetPostByIdController } from "./controller/GetPostByIdController"
import { LoginUserContoller } from "./controller/LoginUserController"
import { PostController } from "./controller/PostController"
import { UserContoller } from "./controller/UserController"


const userController = new UserContoller
const loginUserContoller = new LoginUserContoller
const postController = new PostController
const getPostByIdController = new GetPostByIdController

app.post("/signup", userController.create)
app.post("/login", loginUserContoller.login)

app.post("/post", postController.create)
app.get("/post/:id", getPostByIdController.getPost)