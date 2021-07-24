import Clock from "./Controllers/ClockController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";
import { backgroundService } from "./Services/BackgroundService.js";
import { weatherService } from "./Services/WeatherService.js";


class App {

  quotesController = new QuotesController()

  clockController = new Clock()

  background = backgroundService

  tasksController = new TasksController()

  weather = weatherService

}

window["app"] = new App();
