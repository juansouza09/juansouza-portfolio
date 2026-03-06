import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { destroySwup, initSwup } from './lib/swup'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

initSwup()

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroySwup()
  })
}
