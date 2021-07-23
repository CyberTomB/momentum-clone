import { sandBoxApi } from "./AxiosService.js";

class QuotesService {
   async getQuote() {
      let res = await sandBoxApi.get('quotes')
      console.log(res.data)
   }
}

export const quotesService = new QuotesService()