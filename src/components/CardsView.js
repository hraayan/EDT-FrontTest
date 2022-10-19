import React from "react";
import '../styles/CardsView.css';
import Card from "./Card";



function CardView({restaurants = []}){
  return(
    <div className="principal-container">
      {restaurants.map((restaurant,id) =>(
        <Card key={id} restaurant={restaurant}/>
      ))}
      
    </div>
  );
}
export default CardView;