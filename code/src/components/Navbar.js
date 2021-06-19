import React from 'react';
import { useDispatch, useSelector, batch} from 'react-redux'
import { Link } from 'react-router-dom'

import user from '../reducers/user'
import Logo from './Logo';
import { NavbarWrapper, NavLink, NavMenu, ButtonWrapper, Button } from './styled-components/NavbarElements';


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
        <div classname="logo-wrapper">
          <Logo />        
        </div>
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
        <div classname="logo-wrapper">
          <Logo />        
        </div>
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
