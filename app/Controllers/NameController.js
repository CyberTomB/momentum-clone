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
      ProxyState.name = form.name.value
      console.log('change name controller fired', form.name.value)
      form.reset()

   }

   unlockName() {
      greeting.innerHTML = `
      <h3 class="float-left">Good Day</h3>
                    <form onsubmit="app.nameController.changeName()" class="float-right">
                        <input type="text" minlength="3" maxlength="20" name="name">
                    </form>`
   }
}


