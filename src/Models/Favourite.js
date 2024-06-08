import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// console.log(`🚀 ~ bcrypt:`, bcrypt);

class Favourite extends Model {}

Favourite.init(
  {},
  {
    sequelize: dbConnection,
    modelName: "Favourite",
  }
);

export default Favourite;
