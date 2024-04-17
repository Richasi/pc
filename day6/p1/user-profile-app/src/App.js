import React, { useState } from 'react';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const userData = {
    name: "John Doe",
    email: "john@example.com",
    bio: "I'm a software developer."
  };

  const toggleMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  return (
    <div>
      <h1>Assignment 1: User Profile Application</h1>
      {editMode ? (
        <EditProfile {...userData} />
      ) : (
        <UserProfile {...userData} />
      )}
      <button onClick={toggleMode}>
        {editMode ? "View Mode" : "Edit Mode"}
      </button>
    </div>
  );
};

export default App;
