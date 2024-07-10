import prisma from "../../prisma";

interface CreateUserProps {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({ name, email }: CreateUserProps){
        try {
            const user = await prisma.user.create({
                data: {
                    name, email
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