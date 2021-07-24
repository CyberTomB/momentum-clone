import { sandBoxApi } from "./AxiosService.js";

class QuotesService {
   async getQuote() {
      let res = await sandBoxApi.get('quotes')
      let hsize = 'h4'
      res.data.content.length > 150 ? hsize = 'h5' : 'h4'
      document.getElementById('quote').innerHTML = `
      <${hsize}><em>"${res.data.content}"</em></${hsize}>
                <h6 class="author">${res.data.author}</h6>
      `
   }
}

export const quotesService = new QuotesService()