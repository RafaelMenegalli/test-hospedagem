import { Request, Response } from "express";
import { ListUsersService } from "../../services/user/ListUsersService";

class ListUsersController {
    async handle(req: Request, res: Response) {
        try {
            const listUsersService = new ListUsersService()

            const users = await listUsersService.execute()

            return res.status(200).json(users)
        } catch(error) {
            console.error("Erro ao listar usuários ::::>> ", error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
}

export { ListUsersController }