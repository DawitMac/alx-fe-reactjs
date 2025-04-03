import React from 'react'
import Search from './components/Search'
import User from './components/User'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 gap-6' >
      <h1 className='text-2xl font-bold'>GitHub User Search</h1>
      <Search />
      <User />
    </div>
  )
}

export default App