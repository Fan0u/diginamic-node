const express = require("express");
const { modelUser } = require("./model");
const { Service } = require("./service");
const jwtMiddelware = require("express-jwt");

const router = express.Router();

/**
 * le secret utilisé pour signer le JWT
 * ⚠️ ne jamais commité
 */ 
const SECRET = "9y$B&E)H@McQfThWmZq4t7w!z%C*F-Ja";

/**
 * Ce middeware valide le JWT et rajoute un attribut user à la requete.
 * Cet attribut contient la payload du jeton
 */
router.use(
  jwtMiddelware({ secret: SECRET, algorithms: ["HS256"] }).unless({
    path: ["/user/login", "/user"],
  })
);

/** 
 * Ce middelware gere les erreurs et les transforme en JSON
 */
router.use(
  (err, req, rep, next) => {
    err ? rep.status(err.status).json({error:err.message}): next()
  }
);

exports.userRouter = (sequelize) => {
  // Le model de base de données
  const USER = modelUser(sequelize);
  // Le service metier
  const service = Service(USER, SECRET);

  /**
   * Cette route renvoie l'utilisateur connecté
   */
  router.get("/me", (req, rep) => {
    service.me(req.user).then(user => rep.json(user))
  });

  /**
   * Cette route permet de se connecter 
   * Le body de la requete doit contenir le mot de passe et le login
   */
  router.post("/login", (req, rep) => {
    const { login, password } = req.body;
    service
      .logUser(login, password)
      .then((token) =>
        token ? rep.json({ token }) : rep.status(403).json({ error: "oups" })
      );
  });

  /**
   * Cette route permet de se créer un compte
   * Le body de la requete doit contenir le mot de passe et le login
   */
  router.post("/", (req, rep) => {
    service.create(req.body).then(() => rep.json(req.body));
  });

  return router;
};
