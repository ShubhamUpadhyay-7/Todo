const Sequelize = require("sequelize");
const sequelize = require("../util/db");
const Todo = require("./todo");
const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.hasMany(Todo, { as: "todos", foreignKey: "userId" });

module.exports = User;
