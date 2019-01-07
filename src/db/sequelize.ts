import { Sequelize } from "sequelize-typescript";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../internals/config.json")[env];

const sequelize = new Sequelize(config);

export default sequelize;
