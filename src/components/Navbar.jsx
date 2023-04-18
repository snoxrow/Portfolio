import React from "react";
import "../CSS/Navbar.css";
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <nav>
      <div className="logo left"><img src={logo}/></div>
      <div className="right">
        <ul>
          <a href="#home">
            <li className="links">Home</li>
          </a>
          <a href="#about">
            <li className="links">Experiences</li>
          </a>
          <a href="#projects">
            <li className="links">Projects</li>
          </a>
          <a href="#more">
            <li className="links">About</li>
          </a>
        </ul>
        <a href="#footer" id="contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
