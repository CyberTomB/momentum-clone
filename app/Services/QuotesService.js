import { sandBoxApi } from "./AxiosService.js";

class QuotesService {
   async getQuote() {
      let res = await sandBoxApi.get('quotes')
      console.log(res.data)
      document.getElementById('quote').innerHTML = `
      <h4>"${res.data.content}"</h4>
                <h6 class="author">${res.data.author}</h6>
      `
   }
}

export const quotesService = new QuotesService()