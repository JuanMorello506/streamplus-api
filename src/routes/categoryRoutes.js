import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import CategoryControllers from "../Controllers/CategoryController.js";

const categoryControllers = new CategoryControllers();

const categoryRoutes = Router();

categoryRoutes.use(validateLogin);
categoryRoutes.post("/", categoryControllers.createCategory);
categoryRoutes.get("/", categoryControllers.getAllCategories);
categoryRoutes.get("/:id", categoryControllers.getCategoryById);
categoryRoutes.put("/:id", categoryControllers.updateCategory);
categoryRoutes.delete("/:id", categoryControllers.deleteCategory);

export default categoryRoutes;
