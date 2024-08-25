// src/components/RecommendationsList.jsx
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/1c0d91e760d45d64e08de757a9999a2bc20aeebf/recipe-sharing-app/src/components/recipeStore.js';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recommendations = useRecipeStore(state => state.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
