import React from 'react'

import logo from '../assets/logo.png'
// import userIcon from '../assets/usericon.jpeg'

// import LoginButton from './LoginButton'

const Header = () => {
    return(
      <div>
        <div className="hamburger-menu">Hamburger</div>
        <a href="#">
          <img src={logo} altText="logo for Petspotter" className="petspotter-logo"/>
        </a>
        <div className="navbar">
          <a className="nav-menu" href="#">Home</a>
          <a className="nav-menu" href="#">Posts</a>
          <a className="nav-menu" href="#">About us</a>
          <a className="nav-menu" href="#">Contact</a>
        </div>
        <div>Login
          {/* <LoginButton /> */}
        </div>
        {/* <a href="#">
          <img src={userIcon} altText="logo for Petspotter" className="petspotter-logo"/>
        </a> */}

      </div>
    )
}

export default Header