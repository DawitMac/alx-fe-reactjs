import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({id}) => {
  const { editRecipe } = useRecipeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { title, description };
    editRecipe(id, updatedRecipe);
    setTitle('');
    setDescription('');
    navigate('/');
  };

  return (
    <div className='flex flex-col space-y-4 justify-center items-center width-full my-auto'>
    <h2>Edit Recipe</h2>
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4 justify-center items-start my-auto'>
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
      <button type="submit" className='px-4 py-2 flex items-center justify-center border-none bg-sky-500 text-white text-md font-bold'>Edit Recipe</button>
    </form>
    </div>
  )
}

export default EditRecipeForm