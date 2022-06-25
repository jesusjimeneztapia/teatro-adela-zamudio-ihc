import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'

const $app = document.getElementById('root')

createRoot($app).render(
  <StrictMode>
    <App />
  </StrictMode>
)
