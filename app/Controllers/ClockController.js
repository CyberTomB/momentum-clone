import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";

export default class Clock {

   constructor() {
      this.currentTime()
   }
   currentTime() {
      let date = new Date(); /* creating object of Date class */
      let template = ''
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      hour = this.updateTime(hour);
      min = this.updateTime(min);
      sec = this.updateTime(sec);
      if (ProxyState.clock24) {
         template = `${hour}:${min}`
      } else {
         template = `${hour > 12 ? hour - 12 : hour}:${min} ${hour < 12 ? 'AM' : 'PM'}`
      }
      document.getElementById("clock").innerText = template;
      setTimeout(() => this.currentTime(), 1000)
   }

   setFormat() {
      ProxyState.clock24 = !ProxyState.clock24
      saveState()
      this.currentTime()
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