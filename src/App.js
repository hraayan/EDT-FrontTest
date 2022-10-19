import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import CardView from './components/CardsView';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className='container'>
        <CardView />
      </div>
      
    </div>
  );
}

export default App;
