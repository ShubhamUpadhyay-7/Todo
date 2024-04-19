const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./util/db");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const todoRoute = require("./routes/todoRoute");

app.use("/todo", todoRoute);
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000, () => {
      console.log("Server is running at port 3000.");
    });
  })
  .catch((err) => {
    console.log(err);
  });
