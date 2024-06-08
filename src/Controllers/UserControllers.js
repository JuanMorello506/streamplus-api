import { Json } from "sequelize/lib/utils";
import { User, Role } from "../Models/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class UserControllers {
  createUser = async (req, res) => {
    try {
      const { name, password, mail, roleId } = req.body;
      const { name: username } = await User.create({
        name,
        password,
        mail,
        roleId,
      });
      res.status(200).send({ success: true, message: username });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["id", "name", "mail"],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        where: {
          id,
        },
        attributes: ["id", "name", "mail", "roleId"],
        include: [
          {
            model: Role,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, mail } = req.body;
      const data = await User.update({ name, mail }, { where: { id } });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({ where: { id } });
      // if (data === 0) {
      //   res
      //     .status(204)
      //     .send({ success: true, message: "el usuario no existe" });
      // }
      if (data === 0) throw new Error("No existe el usuario a eliminar");
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({ where: { mail } });
      if (data === null) throw new Error("Credenciales chucu");
      const comparePass = await data.validatePassword(password);
      if (comparePass === false) throw new Error("Credenciales chucu");

      const payload = {
        id: data.id,
        name: data.name,
      };

      const token = generateToken(payload);
      console.log(`🚀 ~ UserControllers ~ login= ~ token:`, token);
      res.cookie("token", token);
      res
        .status(200)
        .send({ success: true, message: "usuario ligueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  me = async (req, res) => {
    try {
      const { user } = req;
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserControllers;
