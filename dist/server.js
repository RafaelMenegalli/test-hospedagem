"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3333;
app.get("/", (req, res) => {
    res.send("Hello, world! Projeto em node com express usando typescript FUNCIONANDO");
});
app.listen(port, () => {
    console.log("Servido rodando na porta: ", port);
});
