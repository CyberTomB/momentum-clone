export default class Weather {
   constructor(data, celsius = true) {
      this.temp = Math.round(data.main.temp - 273.15)
      this.humidity = data.main.humidity
      this.weather = data.weather[0].main
      this.celsius = celsius
      this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   }

   get Template() {
      if (!this.celsius) {
         this.temp = Math.floor((this.temp * 1.8) + 32)
      }
      return `
      ${this.temp} ${this.humidity} ${this.weather} ${this.celsius} ${this.icon}`
   }
}