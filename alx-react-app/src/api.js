// src/api.js
const API_URL = 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/4524e7b71e1170e5cfb2d3e7ea31db8a89ce3295/alx-react-app/src/App.jsx';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
