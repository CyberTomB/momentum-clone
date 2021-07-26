import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";

function _drawTasks() {
   console.log('I heard that')
   console.log(ProxyState.tasks.length == 0)
   let template = ''
   if (ProxyState.tasks.length == 0) {
      template =
         `<li class="bg-gray list-group-item"><p>You've got nothing to do today!</p></li>`
   }
   ProxyState.tasks.forEach(t => {
      template += t.Template
   })
   document.getElementById('tasks').innerHTML = template
   _drawTodoCount()
}

function _drawTodoCount() {
   console.log('drawing todo')
   let completedTasks = 0
   let totalTasks = ProxyState.tasks.length
   let template = ':'
   ProxyState.tasks.forEach(t => {
      t.completed ? completedTasks += 1 : completedTasks += 0
      // totalTasks += 1
   })
   if (totalTasks) {
      template = ` (${completedTasks}/${totalTasks}):`
   }
   document.getElementById('todo-count').innerText = template
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
         // @ts-ignore
         description: form.task.value
      }


      console.log('raw task:', rawTask)
      // @ts-ignore
      let task = new Task(rawTask)


      try {
         await tasksService.addTask(task)
      } catch (error) {
         console.error('controller failed to add task', error)
      }

      // @ts-ignore
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
         console.error('unable to mark task complete', id, error)
      }
   }
}
