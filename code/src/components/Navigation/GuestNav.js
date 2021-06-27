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
      <div
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <p>Home</p>
        </Link>
        <Link to="/petposts" className="posts">
          <p>Posts</p>
        </Link>
        <Link to="/about" className="about">
          <p>About</p>
        </Link>
        <Link to="/contact" className="contact">
          <p>Contact</p>
        </Link>
        <Link to="/login" className="login-link">
          <button className="login">Login</button>
        </Link>
      </div>
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
