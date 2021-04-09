const tableau = [2, 4, 6, 8];
const tableauPair = [1, 3, 5, 7];

console.log("tableau", tableau);
console.log(
  "filter > 4",
  tableau.filter((x) => x > 4)
);

console.log("tableauJusqua10", [...tableau, 10]);
console.log("tableauDepuis0", [0, ...tableau]);
console.log("tableau puis tableauPair", [...tableau, ...tableauPair]);
console.log(
  "tableau puis tableauPair trié",
  [...tableau, ...tableauPair].sort()
);
console.log(
  "Multiplié par deux",
  tableau.map((element) => element * 2)
);
console.log(
  "Filtré puis Multiplié par deux",
  tableau.filter((element) => element > 4).map((element) => element * 2)
);
console.log(
  "Multiplié par deux puis filtré",
  tableau.map((element) => element * 2).filter((element) => element > 4)
);
console.log(
  "Element avec son double",
  tableau.map((element) => [element, element * 2])
);
console.log(
  "Tableau d'objet avec age",
  tableau.map((element) => ({ age: element }))
);

const tableauPrenom = ["Matthieu", "Mathieu", "Romain", "Dylan"];
const ditBonjour = (prenom) => `Bonjour ${prenom}`;
tableauPrenom.forEach((element) => console.log(ditBonjour(element)));
console.log("----");
tableauPrenom.map(ditBonjour).forEach((element) => console.log(element));

console.log(
  "Element avec son double à plat",
  tableau.flatMap((element) => [element, element * 2])
);
console.log("Tableau à plat", [2, 4, 8, [10]].flat());

const phrases = [
  "Bonjour Bob",
  "Bonjour Comment allez vous ?",
  "Good morning Bob",
];
console.log("split", "Ceci est un exemple".split(" "));
console.log(
  "split de tableau",
  phrases.flatMap((phrase) => phrase.split(" "))
);

const tableauSimple = [1, 2, 3, 4];
console.log(
  "factoriel",
  tableauSimple.reduce((acc, valeur) => acc * valeur, 1)
);

const motsDesPhrases = phrases.flatMap((phrase) => phrase.split(" "));
console.log("motsDesPhrases", motsDesPhrases);
const comptage = motsDesPhrases.reduce(
  (acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }),
  {}
);
console.log("Comptage", comptage);

console.log("Tous les elements superieurs à 3 ?", tableauSimple.every(element => element > 3))
console.log("Au moins un des elements superieur à 3 ?", tableauSimple.some(element => element > 3))
console.log("Trouver un les elements superieur à 3", tableauSimple.find(element => element > 3))