import {StrictMode} from 'react';
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

///////////
// Add a listener callback for a given context
///////////
export function addSpaListener(type: string, selector: string, callback: (e: Event) => void, parent = document) {
  parent.addEventListener(type, e => {
    const myTarget: HTMLElement = e.target as HTMLElement
    if (myTarget.matches(selector)) {
      callback(e)
    }
  })
}

///////////
// When the user clicks anywhere outside of these, ensure they are closed
///////////
window.onclick = function (event) {
  const myTarget: HTMLElement = event.target as HTMLElement
  if (!myTarget.matches("#cart-summary, #cart-summary *, #user-login, #user-login *, #user-profile, #user-profile *, #search-platform, #search-platform *")) {
    document.getElementById('user-login')?.classList.add('hidden')
    document.getElementById('user-profile')?.classList.add('hidden')
    document.getElementById('cart-summary')?.classList.add('hidden')
    document.getElementById('search-platform')?.classList.add('hidden')
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
