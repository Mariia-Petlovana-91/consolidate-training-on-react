import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import "modern-normalize";
import './components/sass/main.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
