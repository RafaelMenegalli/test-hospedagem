import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email } = req.body
            const createUserService = new CreateUserService()

            const user = await createUserService.execute({name, email})

            return res.status(200).json(user)
        } catch (error) {
            console.error("Erro ao cadastrar usuário ::::>> ", error)
            return res.status(500).json({message: "Internal server error"})
        }
    }
}

export { CreateUserController }