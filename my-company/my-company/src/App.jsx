import { useState } from 'react'
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/my-company/src/assets/react.svg'
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/my-company/public/vite.svg'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/my-company/src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/Navbar.jsx';
import Home from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/Home.jsx';
import About from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/About.jsx';
import Services from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/Services.jsx';
import Contact from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/Contact.jsx';
import Footer from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f8247c59b23584561e2dece8b9416541ec791758/my-company/Components/Footer.jsx'; // Optional


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
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Optional */}
    </Router>
    </>
  )
}

export default App
