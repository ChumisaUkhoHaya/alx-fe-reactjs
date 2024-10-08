import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/020e4534405f0f94a9e205dc44b98d4aa2cd22de/react-router-advanced/src/assets/react.svg';
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/020e4534405f0f94a9e205dc44b98d4aa2cd22de/react-router-advanced/public/vite.svg';
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/020e4534405f0f94a9e205dc44b98d4aa2cd22de/react-router-advanced/src/App.css';

// Import your components for routing
import Profile from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/Profile.jsx';
import ProfileDetails from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/ProfileDetails.jsx';
import ProfileSettings from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/ProfileSettings.jsx';
import Blog from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/Blog.jsx';
import BlogPost from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/BlogPost.jsx';
import Login from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/Login.jsx';
import ProtectedRoute from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/70565aee26d3156684a690bb15f4baa11c11ad5f/react-router-advanced/src/components/ProtectedRoute.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
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

        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/profile">Profile</Link> | 
          <Link to="/blog">Blog</Link> | 
          <Link to="/login">Login</Link>
        </nav>

        {/* Router Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          "/blog/:id"
        </Routes>
      </>
    </Router>
  );
}

export default App;
