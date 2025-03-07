import React from "react";
import useRecipeStore from "./recipeStore";

import RecipeDetails from "./RecipeDetails";
import { Link } from "react-router-dom";

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  console.log("filteredRecipes", filteredRecipes , typeof(filteredRecipes))
    return (
      <Link to="/add-recipe">
        {filteredRecipes.map(recipe => (
          <RecipeDetails key={recipe.id} recipeId={recipe.id} />
        ))}

      </Link>
    );
  };

  export default RecipeList;
