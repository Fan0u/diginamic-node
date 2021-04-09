const appelerNomAPI = () =>
  new Promise((resolve) => {
    console.log("Appel à l'api Nom...");
    setTimeout(() => {
      console.log("Reponse de l'api Nom");
      resolve({ nom: "Matthieu" });
    }, 2000);
  });

const appelerTravailAPI = () =>
  new Promise((resolve) => {
    console.log("Appel à l'api Travail...");
    setTimeout(() => {
      console.log("Reponse de l'api Travail");
      resolve({ role: "Codeur" });
    }, 3000);
  });

const direBonjour = ({ nom }, { role }) =>
  new Promise((resolve, reject) => {
    nom ? resolve(`Bonjour ${nom}, tu es ${role}`) : reject("Y'a personne");
  });

const traitementAsync = async () => {
  try {
    const personne = await appelerNomAPI();
    const travail = await appelerTravailAPI();
    const deuxiemeResultat = await direBonjour(personne, travail);
    console.log("Traitement", deuxiemeResultat);
  } catch (cause) {
    console.log("oups", cause);
  }
  console.log("Traitement terminé");
};

traitementAsync();
