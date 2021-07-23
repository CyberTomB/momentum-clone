import QuotesController from "./Controllers/QuotesController.js";


class App {
  quotesController = new QuotesController()

}

window["app"] = new App();
