import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import MoviesControllers from "../Controllers/MoviesController.js";

const moviesControllers = new MoviesControllers();

const moviesRoutes = Router();


moviesRoutes.get("/:id", moviesControllers.getMovieById);
moviesRoutes.get("/", moviesControllers.getAllMovies);

moviesRoutes.use(validateLogin);

moviesRoutes.post("/", moviesControllers.createMovie);
moviesRoutes.put("/:id", moviesControllers.updateMovie);
moviesRoutes.delete("/:id", moviesControllers.deleteMovie);

export default moviesRoutes;