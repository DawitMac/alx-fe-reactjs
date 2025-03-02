import React from 'react'
import './App.css'
import { AddRecipeForm } from './components/AddRecipeForm'
import { RecipeList } from './components/RecipeList'

const App = () => {
  return (
    <>
    <AddRecipeForm />
    <RecipeList />
    </>
  )
}
export default App
