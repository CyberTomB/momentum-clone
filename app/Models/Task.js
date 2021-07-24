export default class Task {
   constructor({ description, id, completed, user }) {
      this.id = id || 'test id'
      this.description = description || 'test description'
      this.completed = completed || false
      this.user = user || 'test user'
   }
   get Template() {
      return `
      <li class="bg-gray list-group-item"><input title="mark complete" type="checkbox" id="${this.id}" name="${this.description}" onclick="app.tasksController.isTaskChecked('${this.id}')" ${this.completed ? 'checked' : ''}>
      <label for="${this.id}">${this.completed ? '<s>' : ''}${this.description}${this.completed ? '</s>' : ''}  
         <small title="delete task" class="action text-dark font-weight-light" onclick="app.tasksController.killTask('${this.id}')">X
         </small></label>
                               </li>`
   }
}
