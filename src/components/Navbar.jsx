import React, { useState } from "react";
import "../CSS/Navbar.css";
import logo from "../assets/logo.jpeg";
import menu from "../assets/menu-icon.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="logo left">
        <img src={logo} />
      </div>
      <div className="right">
        <ul id="nav-list" className={toggle ? "show" : ""}>
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
        <a
          href="#footer"
          id="contact"
          className={toggle ? "show" : ''}
        >
          Contact
        </a>
        </ul>
        <div className="menu">
          <img
            onClick={() => {
              setToggle(!toggle);
              console.log(toggle);
            }}
            src={menu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
