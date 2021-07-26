import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { sandBoxApi } from "./AxiosService.js";

function _drawWeather() {
   console.log('I drew the weather')
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

   setTempFormat() {
      console.log(ProxyState.weather.celsius)
      ProxyState.weather.celsius = !ProxyState.weather.celsius
      ProxyState.celsius = !ProxyState.celsius
      ProxyState.weather = ProxyState.weather
      console.log(ProxyState.weather.celsius)
   }
}

export const weatherService = new WeatherService()