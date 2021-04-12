const events = require('events');

const monEmetteur = new events.EventEmitter();

monEmetteur.on('Matin commence', () => console.log('Fetch cafe'));
monEmetteur.on('Matin commence', () => console.log('Connexion à la formation Diginamic'));

console.log('emit', 'Matin commence');
monEmetteur.emit('Matin commence');

monEmetteur.on('Matin commence', () => console.log('Utiliser un compte libre'));

console.log('emit', 'Un autre matin commence');
monEmetteur.emit('Matin commence');