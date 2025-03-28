import React, { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipe data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
            <div  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.instructions.substring(0,200)}</p>
            </div>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default HomePage;