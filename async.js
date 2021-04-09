const appelerAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ nom: "Matthieu", role: "Codeur" });
  }, 2000);
});

const direBonjour = ({ nom, role }) =>
  new Promise((resolve, reject) => {
    nom ? resolve(`Bonjour ${nom}, tu es ${role}`) : reject("Y'a personne");
  });

const traitementAsync = async () => {
  try {
    const personne = await appelerAPI;
    const deuxiemeResultat = await direBonjour(personne);
    console.log("traitement", deuxiemeResultat);
  } catch (cause) {
    console.log("oups", cause);
  }
  console.log('Traitement terminé')
};

traitementAsync();
console.log('Appel au serveur...')
