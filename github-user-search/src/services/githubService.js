import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

/**
 * Fetch user data from GitHub API with advanced search capabilities.
 * @param {string} query - The search query.
 * @returns {Promise<object>} - User data from GitHub.
 */
export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}`);
    return response.data; // Includes items array with user data
  } catch (error) {
    throw new Error('User not found');
  }
};
