import express, {Request, Response} from 'express';

const app = express();
const port = 3333;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world! Projeto em node com express usando typescript FUNCIONANDO")
})

app.listen(port, () => {
    console.log("Servido rodando na porta: ", port)
})