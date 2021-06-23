import React, { useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import user from "../../reducers/user";
import Logo from "../../assets/logo.svg";
import "./NavElements.css";

const style = { fontSize: "5em", color: "white" };

const UserNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onButtonClick = () => {
    batch(() => {
      // remove user from localStorage
      localStorage.removeItem("user");
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setAccessToken(null));
    });
  };

  if (accessToken) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/create-post">
          <button 
            className="create-button" 
            type="submit"
          >
            New Post
          </button>
        </Link>
        <Link 
          to="/" 
          className="home"
        >
          <li>Home</li>
        </Link>
        <Link 
          to="/petposts" 
          className="posts"
        >
          <li>Posts</li>
        </Link>
        <Link 
          to="/about" 
          className="about"
        >
          <li>About</li>
        </Link>
        <Link 
          to="/contact" 
          className="contact"
        >
          <li>Contact</li>
        </Link>
        <button onClick={onButtonClick}> Logout </button>
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
} 
};

export default UserNav
