import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Design business webpage/src/styles/index.css'
import App from '../Design business webpage/src/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
