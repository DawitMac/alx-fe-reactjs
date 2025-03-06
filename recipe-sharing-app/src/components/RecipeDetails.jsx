import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';


  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        {
          recipe &&
          <div className='flex space-x-4'>
          <EditRecipeForm id={recipe.id} />
          <DeleteRecipeButton id={recipe.id} />
        </div>
        }
      </div>
    );
  };

  export default RecipeDetails;