import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/assets/react.svg'
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/public/vite.svg'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/App.css'
import RecipeList from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/components/RecipeList.jsx';
import AddRecipeForm from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/components/AddRecipeForm.jsx';
import RecipeDetails from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/components/RecipeDetails.jsx';


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
          Edit <code>https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
    <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
    
    </>
  )
}

export default App
