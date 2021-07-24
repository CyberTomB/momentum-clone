import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

class WeatherService {
   constructor() {
      this.getWeather()
   }

   async getWeather() {
      let res = await sandBoxApi.get('weather')
      console.log('weather data:', res.data)
      let weather = new Weather(res.data, false)
      console.log('weather object: ', weather.Template)
   }
}

export const weatherService = new WeatherService()