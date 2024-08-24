import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/58df284b7596c96973876224f015631cf246f0e8/alx-react-app/src/App.jsx'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/e6a49b7934626cf5ea96d9aa12b8d774505651d6/alx-react-app/src/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
