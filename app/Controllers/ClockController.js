export default class Clock {

   constructor() {
      this.currentTime()
   }
   currentTime() {
      var date = new Date(); /* creating object of Date class */
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      hour = this.updateTime(hour);
      min = this.updateTime(min);
      sec = this.updateTime(sec);
      document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */; /* setting timer */
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