import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

function _drawWeather() {
   console.log('draw-weather:', ProxyState.weather)
   console.log('weather template:', ProxyState.weather.Template)
   document.getElementById('weather').innerHTML = ProxyState.weather.Template
   console.log('I drew the weather')
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
      console.log('weather object: ', ProxyState.weather)
      console.log('weather html', ProxyState.weather.Template)
   }

   setTempFormat(bool) {
      ProxyState.weather.celsius = bool
      console.log('boolean passed:', bool)
      console.log('weather obj in set format:', ProxyState.weather)
      ProxyState.weather = ProxyState.weather
   }
}

export const weatherService = new WeatherService()