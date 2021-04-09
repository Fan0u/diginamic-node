const faireQuelqueChose = new Promise((resolve) => {
  resolve();
});

const faireAutreChose = (nom) =>
  new Promise((resolve, reject) => {
    nom ? resolve(`Bonjour ${nom}`): reject("Y'a personne");
  });

faireQuelqueChose
  .then((resultat) => faireAutreChose(resultat))
  .then((deuxiemeResultat) => console.log("deuxieme resultat : ", deuxiemeResultat))
  .catch((cause) => console.log('oups ', cause));
