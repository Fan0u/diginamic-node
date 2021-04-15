const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

const SECRET = "9y$B&E)H@McQfThWmZq4t7w!z%C*F-Ja"

app.get('/login', (req, rep) =>{
    const token = jwt.sign({login:'mmauny', role:'ADMIN' }, SECRET, {expiresIn : '1h'})
    rep.json({token})
})

app.get('/', (req, rep) => {
    const message = 'Bien le bonjour, je suis le guichetier !';
    rep.json({message});
})

app.listen(8001, () => console.log("En avant l'authent sur le port 8001!"))