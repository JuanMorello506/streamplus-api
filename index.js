import express from "express";
import routes from "./src/routes/routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import dbConnection from "./src/dbConnection/dbConnection.js";
import {SERVER_PORT} from "./src/config/config.js"
import { seed } from "./src/seed/seed.js";
import cors from "cors"

const app = express();
app.use(cors())
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(routes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

await dbConnection.sync({force: false})
await seed()


app.listen(SERVER_PORT, () => {
  console.log("express ok");
});
