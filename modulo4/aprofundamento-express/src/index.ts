import  express  from "express";
import  cors  from "cors";


const app = express()

app.use(express.json())

app.use(cors())

const port = 3333

const server = app.listen(port, ()=>{
    if(server){
    console.log("testando")
}else{
    console.log("errou")
}
})

console.log(server)

