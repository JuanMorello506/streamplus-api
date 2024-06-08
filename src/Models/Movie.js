import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// console.log(`🚀 ~ bcrypt:`, bcrypt);

class Movie extends Model {}

Movie.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "Movie",
  }
);

export default Movie;
