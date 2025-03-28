import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    
    const ingredientList = ingredients.split('\n').filter(Boolean);
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }

    if (!steps) newErrors.steps = 'Preparation steps are required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ingredientList = ingredients.split('\n').filter(Boolean);
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps: steps.split('\n').filter(Boolean),
    };

    // Here you would typically handle the form submission (e.g., send data to an API)
    console.log('Submitting:', newRecipe);

    // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        {errors.title && <p className="text-red-500 text-center mb-2">{errors.title}</p>}
        {errors.ingredients && <p className="text-red-500 text-center mb-2">{errors.ingredients}</p>}
        {errors.steps && <p className="text-red-500 text-center mb-2">{errors.steps}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
            className={`w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="steps">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`w-full border ${errors.steps ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
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