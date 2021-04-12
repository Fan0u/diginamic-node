import events from "events";

const monEmetteur = new events.EventEmitter();
const COMMENCE = "Debut de l'action";
const FIN = "Fin de laction";

const monEmetteurPostSieste = new events.EventEmitter();

export default monEmetteur;
export { COMMENCE, FIN, monEmetteurPostSieste };
