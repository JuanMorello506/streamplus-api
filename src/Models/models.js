import User from "./User.js";
import Movie from "./Movie.js";
import Comment from "./Comment.js";
import Category from "./Category.js";


Movie.belongsToMany(Category, { through: 'MovieCategories', foreignKey: "categoryId" });
Category.belongsToMany(Movie, { through: 'MovieCategories', foreignKey: 'movieId' });


Movie.hasMany(Category,{
    foreignKey: "movieId"
})

Movie.hasMany(Comment,{
    foreignKey: "movieId"
})

Movie.belongsToMany(User,{ through: 'Favourites', foreignKey: "userId"})
User.belongsToMany(Movie, {through: 'Favourites', foreignKey: "movieId"})


Comment.belongsTo(Movie,{
    foreignKey: "movieId"
})

Comment.belongsTo(User,{
    foreignKey: "userId"
})



export { User, Movie, Comment, Category };
