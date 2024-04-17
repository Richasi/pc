import React from 'react';
import './App.css';
import UserForm from './UserForm';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <UserForm />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
