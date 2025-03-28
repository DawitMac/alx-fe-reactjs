import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App