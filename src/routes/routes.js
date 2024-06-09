import { Router } from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import { logger } from "../middlewares/middlewares.js";
import categoryRoutes from "./categoryRoutes.js";

const routes = Router();


routes.use("streamplus/user", logger, userRoutes);
routes.use("streamplus/post", postRoutes);
routes.use("streamplus/categories", logger, categoryRoutes);

export default routes;
