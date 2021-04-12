import { COMMENCE } from "./5-events.mjs";

const attendre = () => console.log("J'attend devant la porte");
const allezPisser = () => console.log("Je vais pisser");

const routinePatate = (emetteur) => {
  emetteur.on(COMMENCE, attendre);
  emetteur.on(COMMENCE, allezPisser);
};

export default routinePatate;
