// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/Home.jsx';
import About from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/About.jsx';
import Services from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/Services.jsx';
import Contact from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/Contact.jsx';
import Footer from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/my-company/Components/Footer.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>




  );
}

export default App;
