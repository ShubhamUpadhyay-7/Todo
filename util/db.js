const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Shu@8299",
  database: "todo",
});

module.export = sequelize;
