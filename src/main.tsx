import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import './style/index.css'
import './style/cssreset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
