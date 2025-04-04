import React, { useState } from 'react';
import { useStore } from '../store/store';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const { setUser } = useStore();

  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter a username");
      return;
    }

    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUser(data);
      setUserData(data); // Save user data for display
    } catch (error) {
      console.error(error);
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
      setUsername(""); // Reset input fields
      setLocation("");
      setMinRepos(0);
    }
  };

  return (
    <div>
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

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="mt-6">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="w-16 h-16 rounded-full" />
          <p>Username: {userData.login}</p>
        </div>
      )}
    </div>
  );
};

export default Search;