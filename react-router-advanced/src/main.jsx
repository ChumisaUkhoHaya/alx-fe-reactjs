import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/App.jsx'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/020e4534405f0f94a9e205dc44b98d4aa2cd22de/react-router-advanced/src/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
