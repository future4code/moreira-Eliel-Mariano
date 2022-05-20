"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 3003;
const server = app.listen(port, () => {
    if (server) {
        console.log(`servidor rodando em http://localhost:${port}`);
    }
    else {
        console.error(`falhou.`);
    }
});
app.get("/use", (req, res) => {
    let newError = 400;
    try {
        //const allUsers = users
        //console.log(allUsers) 
        //elimina arrays dentro de arrays: .flat(1)
        if (data_1.users === []) {
            newError = 401;
            throw new Error("não existem usuários.");
        }
        const names = data_1.users.map((user) => {
            return user.name;
        });
        console.log(names);
        //res.send("criei o get")
        res.status(200).send(names);
    }
    catch (error) {
        res.status(newError).send(error.message);
    }
});
