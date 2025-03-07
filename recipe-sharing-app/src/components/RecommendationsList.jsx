import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p className="text-gray-500">No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="p-3 mb-3 bg-white rounded-md shadow">
            <h3 className="text-lg font-medium">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;