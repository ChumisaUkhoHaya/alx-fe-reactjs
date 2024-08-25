// src/components/FavoritesList.jsx
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/1c0d91e760d45d64e08de757a9999a2bc20aeebf/recipe-sharing-app/src/components/recipeStore.js';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  
  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
