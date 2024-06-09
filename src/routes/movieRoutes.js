import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import MoviesControllers from "../Controllers/MoviesController.js";

const MoviesControllers = new MoviesControllers();

const moviesRoutes = Router();

moviesRoutes.use(validateLogin);
moviesRoutes.post("/", MoviesControllers.createMovie);
moviesRoutes.get("/", MoviesControllers.getAllMovies);
moviesRoutes.get("/:id", MoviesControllers.getMovieById);
moviesRoutes.put("/:id", MoviesControllers.updateMovie);
moviesRoutes.delete("/:id", MoviesControllers.deleteMovie);

export default moviesRoutes;