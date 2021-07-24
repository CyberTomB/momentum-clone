import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

function _drawWeather() {
   document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
class WeatherService {
   constructor() {
      this.getWeather()
      ProxyState.on('weather', _drawWeather)
   }

   async getWeather() {
      let res = await sandBoxApi.get('weather')
      console.log('weather data:', res.data)
      ProxyState.weather = new Weather(res.data, false)
      console.log('weather object: ', ProxyState.weather.Template)
   }
}

export const weatherService = new WeatherService()