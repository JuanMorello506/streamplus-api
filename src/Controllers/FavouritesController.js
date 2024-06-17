import { User, Movie } from "../Models/models.js";

class FavouriteController{
// Obtener los favoritos de un usuario
 getFavourites = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findByPk(userId, {
        include: {
          model: Movie,
          through: { attributes: [] }
        }
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.Movies);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Añadir una película a los favoritos de un usuario
   addFavourite = async (req, res) => {
    const { userId, movieId } = req.params;
    try {
      const user = await User.findByPk(userId);
      const movie = await Movie.findByPk(movieId);
      if (!user || !movie) {
        return res.status(404).json({ message: 'User or Movie not found' });
      }
      await user.addMovie(movie); 
      res.status(201).json({ message: 'Favourite added' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Eliminar una película de los favoritos de un usuario
   removeFavourite = async (req, res) => {
    const { userId, movieId } = req.params;
    try {
      const user = await User.findByPk(userId);
      const movie = await Movie.findByPk(movieId);
      if (!user || !movie) {
        return res.status(404).json({ message: 'User or Movie not found' });
      }
      await user.removeMovie(movie); 
      res.status(200).json({ message: 'Favourite removed' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };    
}



export default FavouriteController
