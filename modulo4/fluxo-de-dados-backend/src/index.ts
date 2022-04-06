import express from "express";

console.log("teste 1")

const app = express();

app.use(express.json());

const port = 3333

const server = app.listen (port, () => {
  if (server) {
    
    console.log(`Server is running in http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;