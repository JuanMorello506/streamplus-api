import { Role } from "../Models/models.js";

export const roleSeed = async () =>
  await Role.bulkCreate([{ name: "admin" }, { name: "user" }]);

await roleSeed();
