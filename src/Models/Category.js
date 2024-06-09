import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";

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
    timestamps: false
  }
);

export default Category;
