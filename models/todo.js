const Sequelize = require("sequelize");
const sequelize = require("../util/db");
// const User = require("./User");
const Todo = sequelize.define("Todo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// Todo.belongsTo(User, { foreignKey: "userId" });

module.exports = Todo;
