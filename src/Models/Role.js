import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    sequelize: dbConnection,
    modelName: "Role",
  }
);



export default Role;
