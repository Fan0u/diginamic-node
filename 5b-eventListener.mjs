import { COMMENCE } from './5-events.mjs';

const routineMatthieu =  (emetteur) => {
    emetteur.on(COMMENCE, () => console.log('Fetch cafe'));
    emetteur.on(COMMENCE, () => console.log('Connexion à la formation Diginamic'));
}

export default routineMatthieu;