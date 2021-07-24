import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { sandBoxApi } from "./AxiosService.js";

class TasksService {
   async addTask(task) {
      console.log('service fired:', task)
      let res = await sandBoxApi.post('/tom/todos', task)
      let newTask = new Task(res.data)
      ProxyState.tasks = [...ProxyState.tasks, newTask]
      console.log('reply from server', res.data)
   }
   async isTaskChecked(id) {
      let task = ProxyState.tasks.find(task => task.id == id)
      task.completed = !task.completed
      console.log('checked task:', task.completed)
      let res = await sandBoxApi.put(`/tom/todos/${task.id}`, { completed: task.completed })
      ProxyState.tasks = ProxyState.tasks
   }

   async killTask(id) {
      let res = await sandBoxApi.delete('/tom/todos/' + id)
      console.log('task deleted:', res.data)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
   }

   async getTasks() {
      let res = await sandBoxApi.get('/tom/todos')
      console.log('tasks', res.data)
      ProxyState.tasks = res.data.map(t => new Task(t))
      console.log('proxystate tasks:', ProxyState.tasks)
   }
}

export const tasksService = new TasksService()