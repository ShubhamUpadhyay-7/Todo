const Sequelize = require("sequelize");
const sequelize = require("../util/db");
const Todo = sequelize.define("Todo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
module.exports = Todo;
