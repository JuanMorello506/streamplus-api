import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import CategoryControllers from "../Controllers/CategoryController.js";

const categoryControllers = new CategoryControllers();

const categoryRoutes = Router();

categoryRoutes.get("/:id", categoryControllers.getCategoryById);
categoryRoutes.get("/", categoryControllers.getAllCategories);

categoryRoutes.use(validateLogin);

categoryRoutes.post("/", categoryControllers.createCategory);
categoryRoutes.put("/:id", categoryControllers.updateCategory);
categoryRoutes.delete("/:id", categoryControllers.deleteCategory);

export default categoryRoutes;
