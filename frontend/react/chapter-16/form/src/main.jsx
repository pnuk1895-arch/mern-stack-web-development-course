import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App from './files.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <TaskFormApp/> */}
  </StrictMode>,
)
