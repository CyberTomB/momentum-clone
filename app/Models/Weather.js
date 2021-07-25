export default class Weather {
   constructor(data, celsius = true) {
      this.tempC = Math.round(data.main.temp - 273.15)
      this.tempF = Math.floor((this.tempC * 1.8) + 32)
      this.humidity = data.main.humidity
      this.weather = data.weather[0].main
      this.celsius = celsius
      this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   }

   get Template() {
      return `
      <img class="float-left" src="${this.icon}" alt="${this.weather}">
                <div>
                    <h3 class="">${this.celsius ? this.tempC : this.tempF}° <span class="action" onclick="app.weather.setTempFormat(${!this.celsius})">${this.celsius ? 'C' : 'F'}</span ></h3 >
         <p>${this.weather}</p>
                </div > `
   }
}