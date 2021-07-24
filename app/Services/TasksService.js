import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { sandBoxApi } from "./AxiosService.js";

class TasksService {
   async addTask(task) {
      console.log('service fired:', task)
      let res = await sandBoxApi.post('/tom/todos', task)
      console.log('reply from server', res.data)
   }
   isTaskChecked(id) {
      let task = ProxyState.tasks.find(task => task.id == id)
      task.checked = document.getElementById(task.id).checked
      ProxyState.tasks = ProxyState.tasks
   }

   async getTasks() {
      let res = await sandBoxApi.get('/tom/todos')
      console.log('tasks', res.data)
      ProxyState.tasks = res.data.map(t => new Task(t))
      console.log('proxystate tasks:', ProxyState.tasks)
   }
}

export const tasksService = new TasksService()