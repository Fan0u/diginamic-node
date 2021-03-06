import readline from "readline";
import monEmetteur, {
  monEmetteurPostSieste,
  COMMENCE,
  FIN,
} from "./5-events.mjs";
import routineMatthieu from "./5b-eventListener.mjs";
import routinePatate from "./5b-eventListenerPatate.mjs";

const reveille = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

routineMatthieu(monEmetteur);
routinePatate(monEmetteur);
routinePatate(monEmetteurPostSieste);

console.log("Nombre d'action effectuées au debut du reveil : ", monEmetteur.listenerCount(COMMENCE))
console.log("Action effectuées au debut du reveil : ", monEmetteur.rawListeners(COMMENCE))
console.log("Nombre d'action effectuées à la fin du reveil : ", monEmetteur.listenerCount(FIN))

reveille.question("Drrrrring ! ", (reponse) => {
  monEmetteur.emit(COMMENCE, reponse);
  setTimeout(() => monEmetteur.emit(FIN, { reponse, heure: "10h04" }), 5000);
  setTimeout(() => reveille.close(), 7000);
});
