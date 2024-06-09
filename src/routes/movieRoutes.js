import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import MoviesControllers from "../Controllers/MoviesController.js";

const moviesControllers = new MoviesControllers();

const moviesRoutes = Router();

moviesRoutes.use(validateLogin);
moviesRoutes.post("/", moviesControllers.createMovie);
moviesRoutes.get("/", moviesControllers.getAllMovies);
moviesRoutes.get("/:id", moviesControllers.getMovieById);
moviesRoutes.put("/:id", moviesControllers.updateMovie);
moviesRoutes.delete("/:id", moviesControllers.deleteMovie);

export default moviesRoutes;