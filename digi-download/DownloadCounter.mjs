import events from "events";

const START = "START";
const UPDATE = "UPDATE";
const END = "END";
const SOON = "SOON";

class DownloadCounter extends events.EventEmitter {
  constructor(downloadTime) {
    super();
    this.downloadTime = downloadTime;
    this.enCours = 0;
  }

  start() {
    this.emit(START);
    const update = () => {
      this.enCours += 1;
      this.emit(UPDATE, { restant: this.downloadTime - this.enCours });
      if (this.enCours === this.downloadTime) {
        this.emit(END);
        clearInterval(interval);
      }
      this.downloadTime - this.enCours == 2 && this.emit(SOON);
    };
    const interval = setInterval(update, 1000);
  }
}
export default DownloadCounter;
export { START, END, UPDATE, SOON };
