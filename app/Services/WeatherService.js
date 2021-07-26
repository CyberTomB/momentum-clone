import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { sandBoxApi } from "./AxiosService.js";

function _drawWeather() {
   console.log('draw-weather:', ProxyState.weather)
   console.log('weather template:', ProxyState.weather.Template)
   document.getElementById('weather').innerHTML = ProxyState.weather.Template
   console.log('I drew the weather')
}
class WeatherService {
   constructor() {
      loadState()
      this.getWeather()
      ProxyState.on('weather', _drawWeather, saveState)
   }

   async getWeather() {
      let res = await sandBoxApi.get('weather')
      console.log('weather data:', res.data)
      ProxyState.weather = new Weather(res.data, ProxyState.celsius)
      console.log('weather object: ', ProxyState.weather)
      console.log('weather html', ProxyState.weather.Template)
   }

   setTempFormat(bool) {
      ProxyState.weather.celsius = bool
      ProxyState.celsius = bool
      console.log('boolean passed:', bool)
      console.log('weather obj in set format:', ProxyState.weather)
      ProxyState.weather = ProxyState.weather
   }
}

export const weatherService = new WeatherService()