const express = require('express');

const app = express();

app.get('/', (req, rep) => {
    rep.send('La racine')
})

app.listen(8000, () => console.log('On écoute sur le port 8000 !'))