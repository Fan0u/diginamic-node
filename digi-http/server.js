const http = require('http');

const todos = [
    { nom : 'Faire les courses', done: false},
    { nom : 'Prendre un cafe', done: true},
    { nom : 'Expliquer clairement', done: true}
]

let requeteCount = 1;

const server = http.createServer((req, rep) => {
    const {url, headers} = req;
    switch (url) {
        case "/todos":
            rep.writeHead(200, {'content-type': 'application/json'})
            .write(JSON.stringify(todos))
            break;
        case "/health":
            rep.write('Tout va bien')
            break;
        default:
            rep.writeHead(404)
            rep.write('Error 404')
            break;
    }
    rep.end()
}).listen(8080, () => {console.log('Zou sur le port 8080')})

server.on('request', () =>(console.log(`Déja ${requeteCount++} requete !!`)))
