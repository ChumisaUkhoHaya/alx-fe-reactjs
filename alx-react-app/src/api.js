// src/api.js
const API_URL = 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/alx-react-app/src/api.js';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
