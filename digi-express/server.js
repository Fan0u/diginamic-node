const express = require('express');

const app = express();

const todos = [
     { description: "Faire les courses", done: false},
     { description: "Expliquer les bases d'express !", done: true}
    ]

app.get('/todos', (req, rep) => {
    rep.json(todos)
})

app.get('/todos/:status', (req, rep) => {
    const status = req.params.status;
    rep.json(todos.filter(todo => todo[status]))
})

app.post('/todos', (req, rep) => {
    rep.send('requete post !')
})

app.listen(8000, () => console.log('On écoute sur le port 8000 !'))
