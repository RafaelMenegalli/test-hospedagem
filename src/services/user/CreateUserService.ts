import prisma from "../../prisma";

interface CreateUserProps {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({ name, email }: CreateUserProps){
        try {
            const id  = Math.floor(Math.random() * 100) + 1
            const createdAt = new Date();
            const updatedAt = new Date();

            const user = await prisma.user.create({
                data: {
                    id,
                    name,
                    email
                }
            })

            return user
        } catch (error) {
            console.error("Erro ao cadastrar usuário ::::>> ", error);
            throw new Error("Falha ao cadastrar usuário")
        }
    }
}

export { CreateUserService }