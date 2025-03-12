import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="p-3 mb-3 bg-white rounded-md shadow">
            <h3 className="text-lg font-medium">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
            <button
              className="mt-2 text-red-500 hover:underline"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;