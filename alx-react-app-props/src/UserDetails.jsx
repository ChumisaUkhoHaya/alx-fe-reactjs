// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/alx-react-app-props/src/UserContext.js';

function UserDetails() {
  // Use useContext to access context data
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
