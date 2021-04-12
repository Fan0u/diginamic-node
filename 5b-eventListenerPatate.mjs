import { COMMENCE } from './5-events.mjs';

const routinePatate =  (emetteur) => {
    emetteur.on(COMMENCE, () => console.log("J'attend devant la porte"));
    emetteur.on(COMMENCE, () => console.log("Je vais pisser"));
}

export default routinePatate;