import readline from 'readline'
import monEmetteur from './5-events.mjs'
import { monEmetteurPostSieste } from './5-events.mjs';
import { COMMENCE } from './5-events.mjs';
import routineMatthieu from './5b-eventListener.mjs'
import routinePatate from './5b-eventListenerPatate.mjs';

const reveille = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

routineMatthieu(monEmetteur);
routinePatate(monEmetteur);
routinePatate(monEmetteurPostSieste);

reveille.question('Drrrrring ! ', (reponse) => {
    reponse === 'matin' ? monEmetteur.emit(COMMENCE): monEmetteurPostSieste.emit(COMMENCE)
    reveille.close();
})