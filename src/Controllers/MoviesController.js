import { Movie } from "../Models/models.js";

class MoviesController {
  createMovie = async (req, res) => {
    try {
      const { title, director, year, img, categoryId  } = req.body;
      const movie = await Movie.create({
        title,
        director,
        year,
        img,
        categoryId
      });
      res.status(200).send({ success: true, message: movie });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllMovies = async (req, res) => {
    try {
      const data = await Movie.findAll({
        attributes: ["id", "title", "director", "year", "img", "categoryId"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getMovieById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Movie.findOne({
        where: {
          id,
        },
        attributes: ["id", "name"],
      });
      if (!data) throw new Error("Movie not found");
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

    updateMovie = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, director, year, img, categoryId } = req.body;
      const [updated] = await Movie.update({ title, director, year, img, categoryId }, { where: { id } });
      if (updated === 0) throw new Error("Movie not found or no change made");
      res.status(200).send({ success: true, message: "Movie updated successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteMovie = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Movie.destroy({ where: { id } });
      if (deleted === 0) throw new Error("Movie not found");
      res.status(200).send({ success: true, message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default MoviesController;