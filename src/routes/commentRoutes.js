import { Router } from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import CommentControllers from "../Controllers/CommentController.js";

const commentControllers = new CommentControllers();

const commentRoutes = Router();

// commentRoutes.use(validateLogin);
commentRoutes.post("/", commentControllers.createComment);
commentRoutes.get("/", commentControllers.getAllComment);
commentRoutes.get("/:id", commentControllers.getCommentById);
commentRoutes.get("/movie/:movieId", commentControllers.getAllCommentByMovieId);
commentRoutes.get("/user/:id", commentControllers.getAllCommentByUserId);
commentRoutes.get("/movie/:movieId/user/:userId", commentControllers.getAllCommentByMovieIdAndUserId)
commentRoutes.put("/:id", commentControllers.updateComment);
commentRoutes.delete("/:userId/:movieId", commentControllers.deleteComment);

export default commentRoutes;
