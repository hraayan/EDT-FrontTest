import React from "react";
import restImage from '../images/restaurant.jpg';
import {AiFillStar} from 'react-icons/ai';
import '../styles/Card.css';
function Card(){
  //funcion para cargar los botones de facebook -- script directo de facebook docs
  (function() {
    var element = document.createElement('script'); 
    element.type = "text/javascript"; 
    element.async = true;
    element.id = "facebook-jssdk"
    element.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(element, s);
    })();
  //// fin script facebook

  return(
    <div className="cards">
        {/* div de informacion de restaurant */}
        <div className="info">
          <h3 className="titles">Barajas, Bahena and Kano</h3>
          <p className="contact-info">Web Page: www.web.page</p>
          <p className="contact-info">Email: restaurant@mail.com</p>
          <p className="contact-info">Phone: 5456884</p>
          <p className="contact-info">Address: Av peridosimo no. 27378 col ajhfdggy</p>
          
        </div>
        {/* fin */}

        {/* div de imagen, raiting y botones */}
        <div className="info2">
          <div className="image">
            <img src={restImage} className="rest-image" alt="Restaurant's Logo"/>
          </div>
          <div className="raiting">
            <span id="rate-text">Rating: </span>
            <AiFillStar className="raiting-icon"/>
            <AiFillStar className="raiting-icon"/>
            <AiFillStar className="raiting-icon"/>
            <AiFillStar className="raiting-icon"/>
          </div>
          <div className="social-btns">
            {/* botones de facebook */}
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v15.0" nonce="uD47dkjC"></script>
            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button" data-action="like" data-size="small" data-share="true"></div>
          </div>
          {/* fin facebook */}
        </div>
        {/* fin div */}
      </div>
  );
}

export default Card;