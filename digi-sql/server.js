const express = require("express");
const { Sequelize } = require("sequelize");
const { modelUser } = require("./model/userModel.js");
const { modelLivre } = require("./model/livreModel.js");
const app = express();

const sequelize = new Sequelize("sqlite:database.db");

const USER = modelUser(sequelize);
const LIVRE = modelLivre(sequelize);

app.get("/user", (req, rep) => {
  USER.findAll().then((users) => rep.json(users));
});

sequelize
  .sync()
  .then(() =>
    app.listen(8000, () => console.log("on est prêt sur le port 8000"))
  );
