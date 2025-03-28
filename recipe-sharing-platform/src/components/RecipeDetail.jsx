import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on ID
    const fetchedRecipe = recipesData.find((r) => r.id === id);
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 sm:px-10 md:px-16 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {/* Sample ingredients - replace with actual data or modify as needed */}
          <li>{recipe.strIngredient1}</li>
          <li>{recipe.strIngredient2}</li>
          <li>{recipe.strIngredient3}</li>
          <li>{recipe.strIngredient4}</li>
          <li>{recipe.strIngredient5}</li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Instructions</h2>
        <p className="text-gray-700">
          {recipe.summary}
          
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;