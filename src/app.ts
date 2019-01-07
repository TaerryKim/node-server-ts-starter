// import express, { json, urlencoded } from "express";
// import cors from "cors";
// import validator from "express-validator";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as validator from "express-validator";

import sequelize from "./db/sequelize";
import routes from "./routes/routes";

const app = express();
app.use(cors());
app.use(validator());
// app.use(json());
// app.use(urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sequelize
  .sync()
  .then(() => console.log("✓ DB connection success. Press CTRL-C to stop\n"))
  .catch((err: Error) => {
    console.log(
      "✗ DB connection error. Please make sure DB is running.\n",
      err
    );
    process.exit();
  });

routes(app);

process
  .on("unhandledRejection", (err: Error) => {
    console.error(`unhandledRejection ${err.stack}`);
    process.exit(1);
  })
  .on("uncaughtException", (err: Error) => {
    console.error(`uncaughtException ${err.stack}`);
    process.exit(1);
  });

export default app;
