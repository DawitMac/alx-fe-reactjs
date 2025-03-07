import React from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditRecipeForm from './components/EditRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

const App = () => {
  return (
    <div className='container mx-auto p-4'>
    <h1 className='text-3xl font-bold'>Recipe App</h1>
    <p className='text-gray-500'>Manage your recipes with ease</p>
    <hr className='my-4' />
    <AddRecipeForm />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecipeList />} />
        <Route path='/edit' element={<EditRecipeForm />}  />
        <Route path='/detail' element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
    <FavoritesList />
    <RecommendationsList />
    </div>
  )
}
export default App
