import { Comment } from "../Models/models.js";

class CommentControllers {
  createComment = async (req, res) => {
    try {
      const { comment, rating } = req.body;
      const { comment: userComment, rating: userRating } = await Comment.create({
        comment, rating
      });
      res.status(200).send({ success: true, message: { comment: userComment, rating: userRating} });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllComment = async (req, res) => {
    try {
      const data = await Comment.findAll({
        attributes: ["id", "comment", "rating", "createdAt", "updatedAt", "movieId", "userId"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllCommentByMovieId = async (req, res) => {
    try {
      const { movieId } = req.params;
      const data = await Comment.findAll({
        where: {
            movieId,
          },
        attributes: ["id", "comment", "rating", "createdAt", "updatedAt", "movieId", "userId"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllCommentByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
      const data = await Comment.findAll({
        where: {
            userId,
          },
        attributes: ["id", "comment", "rating", "createdAt", "updatedAt", "movieId", "userId"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllCommentByMovieIdAndUserId = async (req, res) => {
    try {
      const { movieId, userId } = req.params;
      const data = await Comment.findAll({
        where: {
            movieId,
            userId
          },
        attributes: ["id", "comment", "rating", "createdAt", "updatedAt", "movieId", "userId"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getCommentById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.findOne({
        where: {
          id,
        },
        attributes: ["id", "comment", "rating", "createdAt", "updatedAt", "movieId", "userId"],
      });
      if (!data) throw new Error("Comment not found");
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      const { comment } = req.body;
      const [updated] = await Comment.update({ comment }, { where: { id } });
      if (updated === 0) throw new Error("Comment not found or no change made");
      res.status(200).send({ success: true, message: "Comment updated successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Category.destroy({ where: { id } });
      if (deleted === 0) throw new Error("Comment not found");
      res.status(200).send({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default CommentControllers;
