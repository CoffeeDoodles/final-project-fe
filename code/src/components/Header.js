import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import { ButtonContainer, PrimaryButton } from './styled-components/Form'
// import userIcon from '../assets/usericon.jpeg'


const Header = () => {
    return(
      // <div className="header">
      //   <div className="hamburger-menu">Hamburger</div>
      //   <a href="#">
      //     <img src={logo} altText="logo for Petspotter" className="petspotter-logo"/>
      //   </a>
      //   <div className="navbar">
      //     <a className="nav-menu" href="#">Home</a>
      //     <a className="nav-menu" href="#">Posts</a>
      //     <a className="nav-menu" href="#">About us</a>
      //     <a className="nav-menu" href="#">Contact</a>
      //   </div>
        <ButtonContainer>
          <Link to="/login">
            <PrimaryButton>
              Login
            </PrimaryButton>
          </Link>
        </ButtonContainer>

      // </div>
    )
}

export default Header