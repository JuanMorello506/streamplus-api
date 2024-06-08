import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// console.log(`🚀 ~ bcrypt:`, bcrypt);

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "Category",
  }
);

export default Category;
