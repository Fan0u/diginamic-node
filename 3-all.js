const appelerNomAPI = () => new Promise((resolve, reject) => {
  console.log("Appel à l'api Nom...");
  setTimeout(() => {
    console.log("Reponse de l'api Nom");
    reject("Erreur 404, de l'api Nom");
    resolve({ nom: "Matthieu" });
  }, 4000);
});

const appelerTravailAPI = () => new Promise((resolve) => {
  console.log("Appel à l'api Travail...");
  setTimeout(() => {
    console.log("Reponse de l'api Travail");
    resolve({ role: "Codeur" });
  }, 1000);
});

const direBonjour = ({ nom }, { role }) =>
  new Promise((resolve, reject) => {
    nom ? resolve(`Bonjour ${nom}, tu es ${role}`) : reject("Y'a personne");
  });

const traitementAsync = async () => {
  try {
    let [personne, travail] = await Promise.all([appelerNomAPI(), appelerTravailAPI()]);
    const deuxiemeResultat = await direBonjour(personne, travail);
    console.log("Traitement", deuxiemeResultat);
  } catch (cause) {
    console.log("oups", cause);
  }
  console.log("Traitement terminé");
};

traitementAsync();
