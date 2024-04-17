import React from 'react';
import './App.css';
import UserForm from './UserForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Controlled vs. Uncontrolled Components</h1>
      </header>
      <main>
        <UserForm />
      </main>
    </div>
  );
}

export default App;
