import { Json } from "sequelize/lib/utils";
import { User } from "../Models/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class UserControllers {
	createUser = async (req, res) => {
		try {
			const { userName, password, mail } = req.body;
			const { userName: name } = await User.create({
				userName,
				password,
				mail,
			});
			res.status(200).send({ success: true, message: name });
		} catch (error) {
			res.status(400).send({ success: false, message: error });
		}
	};

	getAllUsers = async (req, res) => {
		try {
			const data = await User.findAll({
				attributes: ["id", "userName", "mail"],
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
				attributes: ["id", "userName", "mail"],
			});
			res.status(200).send({ success: true, message: data });
		} catch (error) {
			res.status(400).send({ success: false, message: error });
		}
	};

	updateUser = async (req, res) => {
		try {
			const { id } = req.params;
			const { userName, mail } = req.body;
			const data = await User.update({ userName, mail }, { where: { id } });
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
			const { userName, password } = req.body;
			const data = await User.findOne({ where: { userName } });
			if (data === null) throw new Error("el usuario o contraseña no existe");
			const comparePass = await data.validatePassword(password);
			if (comparePass === false) throw new Error("el usuario o contraseña no existe");

			const payload = {
				id: data.id,
				userName: data.userName,
			};

			const generatedToken = generateToken(payload);
			console.log(`🚀 ~ UserControllers ~ login= ~ token:`, generatedToken);
			// res.cookie("token", token);
			res
				.status(200)
				.send({ success: true, message: "usuario logueado con exito", data, token: generatedToken});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
}

export default UserControllers;
