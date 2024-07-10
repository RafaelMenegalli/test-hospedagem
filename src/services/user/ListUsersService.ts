import prisma from "../../prisma";

class ListUsersService {
    async execute() {
        try {
            const users = await prisma.user.findMany()
            return users
        } catch (error) {
            console.error("Erro na consulta ao banco para listar os usuário :::>> ", error)
            throw new Error("Não foi possível listar os usuários")
        }
    }
}

export { ListUsersService }