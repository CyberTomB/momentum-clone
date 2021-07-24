import Clock from "./Controllers/ClockController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";
import { backgroundService } from "./Services/BackgroundService.js";


class App {

  quotesController = new QuotesController()

  clockController = new Clock()

  background = backgroundService

  tasksController = new TasksController()

}

window["app"] = new App();
