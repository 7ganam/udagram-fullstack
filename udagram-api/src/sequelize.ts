import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, logging: console.log, dialect: "postgres" }
  // storage: ":memory:",
);
