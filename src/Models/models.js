import User from "./User.js";
import Movie from "./Movie.js";
import Comment from "./Comment.js";
import Category from "./Category.js";

Category.hasMany(Movie, {
	foreignKey: "categoryId"
})

Movie.belongsTo(Category, {
	foreignKey: "categoryId"
})

Movie.hasMany(Comment, {
	foreignKey: "movieId"
})

Movie.belongsToMany(User, { through: 'Favourites', foreignKey: "userId", timestamps: false })
User.belongsToMany(Movie, { through: 'Favourites', foreignKey: "movieId", timestamps: false })

Comment.belongsTo(Movie, {
	foreignKey: "movieId"
})

Comment.belongsTo(User, {
	foreignKey: "userId"
})

export { User, Movie, Comment, Category };
