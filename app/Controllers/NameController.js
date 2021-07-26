import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"

let greeting = document.getElementById('greeting')

function _drawGreeting() {
   let date = new Date()
   let time = date.getHours()
   let phrase = ''
   if (time > 18 || time < 5) {
      phrase = 'Evening,'
   } else if (time > 12) {
      phrase = 'Afternoon,'
   } else {
      phrase = 'Morning,'
   }
   greeting.innerHTML = `<h3 class="action" onclick="app.nameController.unlockName()">Good ${phrase} ${ProxyState.name}</h3>`
}
export default class NameController {
   constructor() {
      _drawGreeting()
      ProxyState.on('name', _drawGreeting)
      ProxyState.on('name', saveState)
   }

   changeName() {
      event.preventDefault()
      let form = event.target
      // @ts-ignore
      ProxyState.name = form.name.value
      // @ts-ignore
      console.log('change name controller fired', form.name.value)
      // @ts-ignore
      form.reset()

   }

   unlockName() {
      greeting.innerHTML = `
   <form onsubmit="app.nameController.changeName()">
      <input placeholder="Your Name Here" type="text" minlength="3" maxlength="20" name="name">
   </form>`
   }
}


