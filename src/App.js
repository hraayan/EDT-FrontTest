import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar className="navbar" />
      <div className="principal-container">
        <p>Estamos aqui</p>

      </div>
    </div>
  );
}

export default App;
