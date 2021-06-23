import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../../assets/logo.svg";
import "./NavElements.css";

const style = { fontSize: "5em", color: "white" };

const GuestNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/petposts" className="posts">
          <li>Posts</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Contact</li>
        </Link>
        <Link to="/login" className="login-link">
          <button className="login">Login</button>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <AiOutlineClose style={style} />
        ) : (
          <AiOutlineMenu style={style} />
        )}
      </button>
    </nav>
  );
};

export default GuestNav;
