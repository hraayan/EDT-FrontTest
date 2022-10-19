import React from "react";
import '../styles/CardsView.css';

function CardView(){
  return(
    <div className="principal-container">
      <div className="cards">
        <div className="info">
          <h3 className="titles">Barajas, Bahena and Kano</h3>
          <p className="contact-info">Web Page: www.web.page</p>
          <p className="contact-info">Email: restaurant@mail.com</p>
          <p className="contact-info">Phone: 5456884</p>
          <p className="contact-info">Address: Av peridosimo no. 27378 col ajhfdggy</p>
          
        </div>
        <div className="image">
          aqui va la imagen y rating
        </div>
      </div>
      <div className="cards">
        aqui va toda la info
      </div>
      <div className="cards">
        aqui va toda la info
      </div>
      <div className="cards">
        aqui va toda la info
      </div>
    </div>
  );
}
export default CardView;