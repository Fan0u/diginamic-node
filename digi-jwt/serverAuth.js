const express = require("express");
const jwt = require("jsonwebtoken");

const { compare } = require("./user.js");

const app = express();

const SECRET = "9y$B&E)H@McQfThWmZq4t7w!z%C*F-Ja";

app.use(express.json());

const utilisateurs = [
  {
    login: "mmauny",
    hash: "$2b$10$y0rTS433.JtYelTsGWlCp.bMCmHQz96itr53BTts1Z.xG1E/7af3u",
    role: "ADMIN",
  },
  {
    login: "charlie",
    hash: "$2b$10$cXsq8I5UY5knkzfmsKxtdOaW4CoL5UlEvADV2yQ8b/aXhZClJvaPy",
    role: "VIEWER",
  },
];

app.get("/download", function (req, rep) {
  const file = `${__dirname}/upload/formation.pdf`;
  rep.download(file);
});

app.post("/login", (req, rep) => {
  console.log("body", req.body);
  const { login, password } = req.body;
  const utilisateur = utilisateurs.find(
    (utilisateur) => utilisateur.login === login
  );
  if (!utilisateur) {
    rep.json({ erreur: "non autorisé" });
  } else {
    compare(password, utilisateur.hash).then((same) => {
      if (same) {
        const token = jwt.sign(
          {
            login,
            role: utilisateur.role,
          },
          SECRET,
          {
            expiresIn: "1h",
          }
        );
        rep.json({ token });
      } else {
        rep.status(403).json({ erreur: "non autorisé" });
      }
    });
  }
});

app.get("/", (req, rep) => {
  const message = "Bien le bonjour, je suis le guichetier !";
  rep.json({ message });
});

app.listen(8001, () => console.log("En avant l'authent sur le port 8001!"));
