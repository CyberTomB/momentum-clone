import { sandBoxApi } from "./AxiosService.js"

class BackgroundService {
   constructor() {
      this.getBackground()
   }
   async getBackground() {
      let res = await sandBoxApi.get('images')
      console.log(res.data)
      document.body.style.backgroundImage = `url(${res.data.largeImgUrl})`
      document.getElementById('image-desc').innerHTML =
         `<h6>Image by: ${res.data.author}</h6>
      <a href="${res.data.url}" class="mdi mdi-link"> image</a>`

      // document.getElementById('img-author').innerText = res.data.author
      // document.getElementById('img-url').innerText = res.data.url
   }
}


export const backgroundService = new BackgroundService()