const bodyParser = require("body-parser");
const express = require("express");
const Sequelize = require("sequelize");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const todoRoute = require("./routes/todoRoute");

app.use("/todo", todoRoute);
Sequelize.sync()
  .then((result) => {
    console.log(result);
    app.listen(3000, () => {
      "Server is running at port 3000.";
    });
  })
  .catch((err) => {
    console.log(err);
  });
