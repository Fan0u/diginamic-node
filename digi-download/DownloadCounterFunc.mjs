
import events from "events";

const START = "START";
const UPDATE = "UPDATE";
const END = "END";
const SOON = "SOON";

const DownloadCounterFunc = (downloadTime) =>  {
  let enCours = 0;
  const emiter = new events.EventEmitter();
  
  const start = () => {
    emiter.emit(START);
    const update = () => {
      enCours += 1;
      emiter.emit(UPDATE, { restant: downloadTime - enCours });
      if (enCours === downloadTime) {
        emiter.emit(END);
        clearInterval(interval);
      }
      downloadTime - enCours == 2 && emiter.emit(SOON);
    };
    const interval = setInterval(update, 1000);
  }

  const on = (event, callback) => emiter.on(event, callback)
  return {start, on}
}
export default DownloadCounterFunc;
export { START, END, UPDATE, SOON };
