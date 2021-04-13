const express = require('express');

const app = express();

const todos = [
     { description: "Faire les courses", done: false},
     { description: "Expliquer les bases d'express !", done: true}
    ]

app.get('/', (req, rep) => {
    rep.json(todos)
})

app.listen(8000, () => console.log('On écoute sur le port 8000 !'))