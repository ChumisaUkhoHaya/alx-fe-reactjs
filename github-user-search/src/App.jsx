import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import { fetchUser } from './services/githubService';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  const handleSearch = async () => {
    setError('');
    try {
      const userData = await fetchUser(searchTerm);
      setUser(userData);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  };

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
      <h1>GitHub User Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
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
  );
}

export default App;
