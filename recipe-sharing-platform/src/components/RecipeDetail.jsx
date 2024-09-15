import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if necessary

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {/* Example ingredients; modify according to your data structure */}
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700">
            {/* Example instructions; modify according to your data structure */}
            Step-by-step instructions for preparing the recipe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
