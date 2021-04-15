const express = require('express')
const expressJwt = require('express-jwt')

const app = express();

const SECRET = "9y$B&E)H@McQfThWmZq4t7w!z%C*F-Ja"

app.use(expressJwt({secret : SECRET, algorithms:['HS256']}))

app.get('/secret', (req, rep) =>{
    console.log('user : ', req.user)
    req.user.role ==='ADMIN' ? rep.json({secret:"merci d'avoir payé"}): rep.writeHead(403, 'Il faut payer')
})

app.get('/', (req, rep) => {
    const message = 'Bien le bonjour !';
    rep.json({message});
})

app.listen(8000, () => console.log('En avant le port 8000!'))