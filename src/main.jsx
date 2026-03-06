import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { destroySwup, initSwup } from './lib/swup'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const THEME_STORAGE_KEY = 'theme'
const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
const initialTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'

document.documentElement.classList.toggle('dark', initialTheme === 'dark')

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
