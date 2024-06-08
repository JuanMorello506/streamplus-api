import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// console.log(`🚀 ~ bcrypt:`, bcrypt);

class Comment extends Model {}

Comment.init(
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "Comment",
  }
);

export default Comment;
