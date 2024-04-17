import React from 'react';
import './App.css';
import ContactList from './ContactList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ContactList</h1>
      </header>
      <main>
       <ContactList/>
      </main>
    </div>
  );
}

export default App;
