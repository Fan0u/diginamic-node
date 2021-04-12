import DownloadCounter from './DownloadCounter.mjs'
import { START, END, SOON, UPDATE } from './DownloadCounter.mjs';

const telechargement = new DownloadCounter(10);

telechargement.on(START, () => console.log('Debut du telechargement'))
telechargement.on(SOON, () => console.log('Telechargement bientot terminé'))
//telechargement.on(UPDATE, ({restant}) => console.log(`Télechargement en cours, il reste ${restant}s`))
telechargement.on(END, () => console.log('Fin du telechargement'))
telechargement.emit(END)
telechargement.start();