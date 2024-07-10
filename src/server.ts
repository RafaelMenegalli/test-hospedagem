import express, {Request, Response} from 'express';
import cors from "cors";
import path from "path";

import { router }from "./routes";

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Servido rodando na porta: ", port)
})