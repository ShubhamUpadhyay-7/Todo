const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./util/db");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const todoRoute = require("./routes/todoRoute");
const authRoute = require("./routes/authRoutes");

app.use("/todo", todoRoute);
app.use("/auth", authRoute);
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
