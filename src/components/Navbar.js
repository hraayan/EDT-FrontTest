import React, { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../styles/Navbar.css';
function Navbar(){
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return(
    <header>
      <h1>Melp App <span className="no-shadow">🍽️</span></h1>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">All Restaurantes</a>
        <a href="/#">Recomendations</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;