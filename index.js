import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import dbConnection from "./dbConnection/dbConnection.js";
import {SERVER_PORT} from "./config/config.js"
// import { roleSeed } from "./seed/roleSeed.js";



const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(routes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

await dbConnection.sync({force:false})
// await roleSeed()
// await userSeed()



app.listen(SERVER_PORT, () => {
  console.log("express ok");
});
