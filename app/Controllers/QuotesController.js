import { quotesService } from "../Services/QuotesService.js"

export default class QuotesController {
   constructor() {
      this.getQuote()
   }
   async getQuote() {
      try {
         quotesService.getQuote()

      } catch (error) {
         console.error('failed to get quote:', error)

      }
   }
}

