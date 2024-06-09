import { Router } from "express";
import userRoutes from "./userRoutes.js";
import { logger } from "../middlewares/middlewares.js";
import categoryRoutes from "./categoryRoutes.js";

const routes = Router();


routes.use("streamplus/user", logger, userRoutes);
routes.use("streamplus/category", logger, categoryRoutes);
routes.use("streamplus/comment", logger, commentRoutes);

export default routes;
