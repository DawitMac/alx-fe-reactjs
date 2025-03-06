import React from "react";
import useRecipeStore from "../store/recipeStore";

import RecipeDetails from "./RecipeDetails";

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
       
        {recipes.map(recipe => (
          <RecipeDetails key={recipe.id} recipeId={recipe.id} />
        ))}

      </div>
    );
  };

  export default RecipeList;
