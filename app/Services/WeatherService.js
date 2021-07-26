import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { sandBoxApi } from "./AxiosService.js";

function _drawWeather() {
   document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
class WeatherService {
   constructor() {
      loadState()
      this.getWeather()
      ProxyState.on('weather', _drawWeather)
      ProxyState.on('celsius', saveState)
   }

   async getWeather() {
      let res = await sandBoxApi.get('weather')
      console.log('weather api:', res.data)
      ProxyState.weather = new Weather(res.data, ProxyState.celsius)
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