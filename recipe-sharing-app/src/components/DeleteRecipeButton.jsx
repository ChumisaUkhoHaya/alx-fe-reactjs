// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/f64e16a05e96c04132b4be407f051647fbcedc17/recipe-sharing-app/src/components/recipeStore.js';
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the home page or recipe list after deletion
    }
  };

  return <button onClick={handleDelete} style={{ color: 'red' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
