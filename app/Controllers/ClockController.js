import { ProxyState } from "../AppState.js";

export default class Clock {

   constructor() {
      this.currentTime()
   }
   currentTime() {
      let date = new Date(); /* creating object of Date class */
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      hour = this.updateTime(hour);
      min = this.updateTime(min);
      sec = this.updateTime(sec);
      document.getElementById("clock").innerText = hour + " : " + min; /* adding time to the div */; /* setting timer */
      setTimeout(() => this.currentTime(), 1000)
   }

   updateTime(k) {
      if (k < 10) {
         return "0" + k;
      }
      else {
         return k;
      }
   }
}