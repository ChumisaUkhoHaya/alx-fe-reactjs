// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/recipe-sharing-app/src/recipeStore.js';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
