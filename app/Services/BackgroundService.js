import { sandBoxApi } from "./AxiosService.js"

class BackgroundService {
   constructor() {
      this.getBackground()
   }
   async getBackground() {
      let res = await sandBoxApi.get('images')
      console.log(res.data)
      document.body.style.backgroundImage = `url(${res.data.imgUrl})`
      console.log(document.body.style.backgroundImage)
   }
}


export const backgroundService = new BackgroundService()