// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f64e16a05e96c04132b4be407f051647fbcedc17/recipe-sharing-app/src/components/recipeStore.js';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return <button onClick={handleDelete} style={{ color: 'red' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
