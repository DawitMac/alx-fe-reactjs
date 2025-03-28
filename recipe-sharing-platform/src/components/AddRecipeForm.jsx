import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    const ingredientList = ingredients.split('\n').filter(Boolean); // Split by newline and remove empty entries
    if (ingredientList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    // Here you would typically handle the form submission (e.g., send data to an API)
    console.log('Submitting:', { title, ingredients: ingredientList, instructions });
    // Clear the form
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;