import { COMMENCE, FIN } from "./5-events.mjs";

const traitementMatin = (heure) => console.log("Connexion à la formation Diginamic", `il est déja ${heure}`);
const traitementAutre = () => console.log("Revenir à la formation Diginamic");
const faireDuCafe = () => console.log("Fetch cafe")

function routineMatthieu(emetteur) {
  emetteur.on(COMMENCE, faireDuCafe);
  emetteur.on(FIN, ({reponse, heure}) => 
    reponse === "Matin" ? traitementMatin(heure) : traitementAutre()
  );
};

export default routineMatthieu;
