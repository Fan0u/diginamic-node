const express = require("express");
const { userRouter } = require("./user/router.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:database.db");

app = express();

app.use(express.json());

app.use("/user", userRouter(sequelize));

sequelize
  .sync()
  .then(() =>
    app.listen("8000", () => console.log("Serveur serieux sur le port 8000"))
  );
