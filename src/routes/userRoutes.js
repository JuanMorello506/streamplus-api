import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";

const userController = new UserControllers();

const userRoutes = Router();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);
userRoutes.use(validateLogin);
userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/me", userController.me);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
