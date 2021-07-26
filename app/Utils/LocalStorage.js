import { ProxyState } from "../AppState.js";

export function saveState() {
   localStorage.setItem('PageElements', JSON.stringify({
      name: ProxyState.name,
      celsius: ProxyState.celsius
   }))
   console.log('saved state', ProxyState)
}

export function loadState() {
   let data = JSON.parse(localStorage.getItem('PageElements'))
   console.log(data)
   if (data != null) {
      ProxyState.name = data.name
      ProxyState.celsius = data.celsius
   }
}