import React from 'react';
import { useDispatch, useSelector, batch} from 'react-redux';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import user from '../reducers/user';
import { NavbarWrapper, LogoWrapper, HeaderLogo, NavLink, NavMenu, ButtonWrapper, Button } from './styled-components/NavbarElements';
import logoImg from '../assets/logo.svg';

const style = { color: "white", fontSize: "2em" }

const Navbar = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store.user.accessToken)

  const onButtonClick = () => {
    batch(() => {
      // remove user from localStorage
      localStorage.removeItem('user')
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setAccessToken(null))
    })
  }
  
  if (accessToken) {
    return (  
      <>
      <NavbarWrapper> 
        <LogoWrapper>
          <FiMenu style={ style } /> 
          <HeaderLogo src={logoImg} alt="petspotter-logo" />
        </LogoWrapper>          
        <NavMenu>
        <ButtonWrapper>
          <Link to="/create-post">
            <Button className="create-button" type="submit">
              New Post   
            </Button>
          </Link>
        </ButtonWrapper>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/petposts'>
          Posts
        </NavLink>
        <NavLink to='/about-us'>
          About Us
        </NavLink>
        <NavLink to='/contact'>
          Contact
        </NavLink>
        <ButtonWrapper>
          <Button onClick={onButtonClick} > Logout </Button>
        </ButtonWrapper>
        </NavMenu>
      </NavbarWrapper>
      </>
    )
  } else { 
    return (  
	<>
	<NavbarWrapper>
        <LogoWrapper>
          <FiMenu style={ style } />
          <HeaderLogo src={logoImg} alt="petspotter-logo" />     
        </LogoWrapper>
        <NavMenu>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/petposts'>
          Posts
        </NavLink>
        <NavLink to='/about-us'>
          About Us
        </NavLink>
        <NavLink to='/contact'>
          Contact
        </NavLink>
        </NavMenu>
    <ButtonWrapper>
          <Link to="/login">
            <Button>
              Login
            </Button>
          </Link>
    </ButtonWrapper>     
	</NavbarWrapper>
	</>
)};
};

export default Navbar;
