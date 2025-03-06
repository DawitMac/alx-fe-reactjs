import { useState } from 'react';
import  useRecipeStore  from './recipeStore';
import { useNavigate } from 'react-router-dom';

   const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <div className='flex flex-col space-y-4 justify-center items-center width-full my-auto'>
      <h2>Add Recipe</h2>
              <form onSubmit={handleSubmit} className='flex flex-col space-y-4 justify-center items-start my-auto'>
        <h2>Add Recipe</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className='border border-gray-400 p-2'
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className='border border-gray-400 p-2'
        />
        <button type="submit" className='px-4 py-2 flex items-center justify-center border-none bg-sky-500 text-white text-md font-bold'>Add Recipe</button>
      </form>
      </div>
    );
  };

  export default AddRecipeForm;