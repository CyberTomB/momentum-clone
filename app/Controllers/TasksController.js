import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";

function _drawTasks() {
   console.log('I heard that')
   let template = ''
   ProxyState.tasks.forEach(t => {
      template += t.Template
   })
   document.getElementById('tasks').innerHTML = template
}
export default class TasksController {
   constructor() {
      this.getTasks()
      ProxyState.on('tasks', _drawTasks)
   }
   async getTasks() {
      try {
         await tasksService.getTasks()
      } catch (error) {
         console.error('controller failed to get tasks', error)
      }
   }

   async addTask() {
      event.preventDefault()
      let form = event.target
      let rawTask = {
         description: form.task.value
      }


      console.log('raw task:', rawTask)
      let task = new Task(rawTask)


      try {
         await tasksService.addTask(task)
      } catch (error) {
         console.error('controller failed to add task', error)
      }

      form.reset()
   }

   async killTask(id) {
      try {
         await tasksService.killTask(id)
      } catch (error) {
         console.error('unable to kill task:', id)
      }
   }


   async isTaskChecked(id) {
      try {
         await tasksService.isTaskChecked(id)
      } catch (error) {
         console.error('unable to mark task complete', id, erorr)
      }
   }
}
