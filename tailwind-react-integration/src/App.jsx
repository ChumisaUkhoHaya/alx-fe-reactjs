import { useState } from 'react'
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/tailwind-react-integration/src/assets/react.svg'
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/tailwind-react-integration/public/vite.svg'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/tailwind-react-integration/src/App.css'
import UserProfile from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/c16fefc24c605aa096e876c31a6bd5dc7044e1a6/tailwind-react-integration/src/component/UserProfile.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
