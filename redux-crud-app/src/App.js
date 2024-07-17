import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Redux CRUD App</h1>
      <Link to="/items">View Items</Link>
    </div>
  );
};

export default App;