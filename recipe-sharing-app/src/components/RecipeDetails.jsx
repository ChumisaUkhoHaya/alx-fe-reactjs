// src/components/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f64e16a05e96c04132b4be407f051647fbcedc17/recipe-sharing-app/src/components/recipeStore.js';
import EditRecipeForm from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/components/EditRecipeForm.jsx';
import DeleteRecipeButton from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/components/DeleteRecipeButton.jsx';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
