import DownloadCounterFunc, {
  START,
  END,
  SOON,
} from "./DownloadCounterFunc.mjs";

const telechargementFunc = DownloadCounterFunc(10);

telechargementFunc.on(START, () =>
  console.log("Debut du telechargement")
);
telechargementFunc.on(SOON, () =>
  console.log("Telechargement bientot terminé")
);
//telechargement.on(UPDATE, ({restant}) => console.log(`Télechargement en cours, il reste ${restant}s`))
telechargementFunc.on(END, () => console.log("Fin du telechargement"));

telechargementFunc.start();
