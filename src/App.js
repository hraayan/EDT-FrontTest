import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import CardView from './components/CardsView';

function App() {
  // -- consumir api
  const url = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json';
  const [restaurants, setRestaurants] = useState();  //hooks
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setRestaurants(responseJSON);
    console.log(responseJSON[0].name)
  }

  useEffect(() =>{
    fetchApi();
  }, []);
  // fin consumo de APi

  return (
    <>
    <Navbar className="navbar" />
    <div className="App">
      
      <div className="container">
        <CardView restaurants={restaurants}/>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
