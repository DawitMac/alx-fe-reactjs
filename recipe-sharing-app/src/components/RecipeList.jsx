import React from "react";
import useRecipeStore from "./recipeStore";

import RecipeDetails from "./RecipeDetails";

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  console.log("filteredRecipes", filteredRecipes , typeof(filteredRecipes))
    return (
      <div>
        {filteredRecipes.map(recipe => (
          <RecipeDetails key={recipe.id} recipeId={recipe.id} />
        ))}

      </div>
    );
  };

  export default RecipeList;
