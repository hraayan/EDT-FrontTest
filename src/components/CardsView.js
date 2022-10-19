import React from "react";
import '../styles/CardsView.css';
import restImage from '../images/restaurant.jpg';
import {AiFillStar} from 'react-icons/ai';
import Card from "./Card";



function CardView(){
  return(
    <div className="principal-container">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default CardView;