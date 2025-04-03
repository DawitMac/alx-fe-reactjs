
const API_URL = 'https://api.github.com';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);
  const queryString = query.join(' ');

  const response = await fetch(`${API_URL}/search/users?q=${encodeURIComponent(queryString)}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};
    
    