import events from 'events' ;

const monEmetteur = new events.EventEmitter();
const COMMENCE = 'Matin commence pour de vrai'

const monEmetteurPostSieste = new events.EventEmitter();

export default monEmetteur;
export {COMMENCE, monEmetteurPostSieste};