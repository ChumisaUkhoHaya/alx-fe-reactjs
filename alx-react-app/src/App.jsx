import { useState } from 'react'
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/e6a49b7934626cf5ea96d9aa12b8d774505651d6/alx-react-app/src/assets/react.svg'
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/e6a49b7934626cf5ea96d9aa12b8d774505651d6/alx-react-app/public/vite.svg'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/e6a49b7934626cf5ea96d9aa12b8d774505651d6/alx-react-app/src/App.css'
import WelcomeMessage from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/42ffe1c73b855971c09448b3debdb9a302ec5ada/alx-react-app/src/components/WelcomeMessage.jsx';
import Header from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/1717a7f95e30e0bde81aef14bb17f2fa6abc0d0e/alx-react-app/src/components/Header.jsx';
import MainContent from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/1717a7f95e30e0bde81aef14bb17f2fa6abc0d0e/alx-react-app/src/components/MainContent.jsx';
import Footer from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/1717a7f95e30e0bde81aef14bb17f2fa6abc0d0e/alx-react-app/src/components/Footer.jsx';



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
      <div>
            <WelcomeMessage />
            {/* Other components or elements */}
        </div>
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    </>
  )
}

export default App
