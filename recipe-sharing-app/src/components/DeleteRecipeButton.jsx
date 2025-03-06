import React from 'react'
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({id}) => {
    const { deleteRecipe } = useRecipeStore()
    const navigate = useNavigate();

  return (
    <div>
        <button
            className='bg-red-500 text-white px-4 py-2 rounded'
            onClick={() =>{
                deleteRecipe(id)
                navigate('/')
            }}
        >
            Delete
        </button>
    </div>
  )
}

export default DeleteRecipeButton