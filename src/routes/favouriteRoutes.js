import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import FavouritesController from "../Controllers/FavouritesController.js";


const favouritesController = new FavouritesController();

const favouritesRoutes = Router();
// Obtener los favoritos de un usuario
favouritesRoutes.get('/:userId', favouritesController.getFavourites);

// Añadir una película a los favoritos de un usuario
favouritesRoutes.post('/:userId/:movieId', favouritesController.addFavourite);

// Eliminar una película de los favoritos de un usuario
favouritesRoutes.delete('/:userId/:movieId', favouritesController.removeFavourite);

export default favouritesRoutes;
