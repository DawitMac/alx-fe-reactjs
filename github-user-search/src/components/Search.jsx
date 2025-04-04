import React, { useState } from 'react'
import { useStore } from '../store/store'
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const { setUser } = useStore()

    const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);

    const handleSubmit = async(e) => {
      e.preventDefault()
      console.log(username , location , minRepos)
      if (!username) {
        alert("Please enter a username")
        return
      }
      try {
        const response = await fetchUserData(username , location , minRepos)
        if (!response.ok) {
          throw new Error("User not found")
        }
        const data = await response.json()
        console.log(data)
        setUser(data)
        setName("")
      }
      catch (error) {
        console.error(error)
        alert("User not found")
      }
    }

       
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
        className="border border-gray-300 p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  )
}

export default Search