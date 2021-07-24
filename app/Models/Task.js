export default class Task {
   constructor({ description, id, completed, user }) {
      this.id = id || 'test id'
      this.description = description || 'test description'
      this.completed = completed || false
      this.user = user || 'test user'
   }
   get Template() {
      return `
      <li class="bg-gray list-group-item"><input type="checkbox" id="${this.id}" name="${this.description}" onclick="" ${this.completed ? 'checked' : ''}>
      <label for="">${this.description}
         <i class="text-danger mdi mdi-delete" onclick="app.tasksController.killTask('${this.id}')">
         </i></label>
                               </li>`
   }
}
