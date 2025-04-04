import axios from "axios";



export const fetchUserData = async ({ username, location, minRepos }) => {
  const query = [];
  
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);
  
  const queryString = query.join(' ');

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(queryString)}`);

    return response.data; // Return the user data from the response
  } catch (error) {
    throw new Error(`Error: ${error.response ? error.response.data.message : error.message}`);
  }
};