import { Router } from "express";
import userRoutes from "./userRoutes.js";
import { logger } from "../middlewares/middlewares.js";
import categoryRoutes from "./categoryRoutes.js";
import commentRoutes from "./commentRoutes.js";
import moviesRoutes from "./movieRoutes.js";

const routes = Router();


routes.use("streamplus/user", logger, userRoutes);
routes.use("streamplus/category", logger, categoryRoutes);
routes.use("streamplus/comment", logger, commentRoutes);
routes.use("streamplus/Movies", logger, moviesRoutes);

export default routes;
