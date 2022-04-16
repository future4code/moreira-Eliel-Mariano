import {app} from "./app"
import { getProducts } from "./endpoints/getPorducts"
import { getUsers } from "./endpoints/getUsers"
import { siginProducts } from "./endpoints/siginProducts"
import { siginUsers } from "./endpoints/siginUsers"

app.post("/users", siginUsers)

app.get("/users", getUsers)

app.post("/products", siginProducts)

app.get("/products", getProducts)

app.post("") //iniciar registo de compra