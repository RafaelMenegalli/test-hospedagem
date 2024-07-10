import { Router } from "express";

//Controllers
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router()

router.get("/users", new ListUsersController().handle)
router.post("/user", new CreateUserController().handle)


export { router }