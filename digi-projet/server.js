const express = require("express");
const jwtMiddelware = require("express-jwt");

const { userRouter } = require("./user/router.js");
const { todoRouter } = require("./todo/router.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:database.db");

/**
 * le secret utilisé pour signer le JWT
 * ⚠️ ne jamais commité
 */
const SECRET = "9y$B&E)H@McQfThWmZq4t7w!z%C*F-Ja";

app = express();

/**
 * Ce middeware valide le JWT et rajoute un attribut user à la requete.
 * Cet attribut contient la payload du jeton
 */
app.use(
  jwtMiddelware({ secret: SECRET, algorithms: ["HS256"] }).unless({
    path: ["/user/login", "/user"],
  })
);

/**
 * Ce middelware gere les erreurs et les transforme en JSON
 */
app.use((err, req, rep, next) => {
  err ? rep.status(err.status).json({ error: err.message }) : next();
});

app.use(express.json());

app.use("/user", userRouter(sequelize, SECRET));
app.use("/todo", todoRouter(sequelize));

sequelize
  .sync()
  .then(() =>
    app.listen("8000", () => console.log("Serveur serieux sur le port 8000"))
  );
