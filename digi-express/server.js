const express = require('express');

const app = express();

app.use(express.json());

let livres = [
     { titre: "Betty", auteur: "Tiffany McDaniel"},
     { titre: "Quatre vingt treize", auteur: "Hugo"}
    ]

app.get('/livres', (req, rep) => {
    rep.json(livres)
})

app.get('/livres/:auteur', (req, rep) => {
    const auteurSelectionne = req.params.auteur;
    rep.json(livres.filter(livre => livre.auteur === auteurSelectionne))
})

app.post('/livres', (req, rep) => {
    const nouveauLivre = req.body
    livres = [...livres, nouveauLivre]
    rep.json(livres)
}) 

app.listen(8000, () => console.log('On écoute sur le port 8000 !'))
