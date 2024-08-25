// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/recipeStore.js';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Ensure recipes are filtered initially
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
