import { Router } from "express";
import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import commentRoutes from "./commentRoutes.js";
import moviesRoutes from "./movieRoutes.js";
import favouritesRoutes from "./favouriteRoutes.js";

const routes = Router();


routes.use("/streamplus/user", userRoutes);
routes.use("/streamplus/category", categoryRoutes);
routes.use("/streamplus/comment", commentRoutes);
routes.use("/streamplus/movie", moviesRoutes);
routes.use("/streamplus/favourites", favouritesRoutes);

export default routes;
