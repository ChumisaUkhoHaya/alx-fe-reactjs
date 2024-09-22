import axios from 'axios';

const API_URL = 'https://api.github.com/users';

/**
 * Fetch user data from GitHub API
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<object>} - User data from GitHub
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

