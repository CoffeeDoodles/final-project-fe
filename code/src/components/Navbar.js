import React from 'react';
import { useDispatch, useSelector, batch} from 'react-redux'
import { Link } from 'react-router-dom'

import user from '../reducers/user'
import { Nav, NavLink, Bars, NavMenu, ButtonWrapper } from './styled-components/NavbarElements';
import { PrimaryButton } from './styled-components/FormElements'
import CreatePostButton from './CreatePostButton';


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
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/home' activeStyle>
          Home
        </NavLink>
        <NavLink to='/petposts' activeStyle>
          Pet Posts
        </NavLink>
        <NavLink to='/about-us' activeStyle>
          About Us
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contact
        </NavLink>
        </NavMenu>
        <ButtonWrapper>
          <CreatePostButton />
          <PrimaryButton onClick={onButtonClick} > Logout </PrimaryButton>
        </ButtonWrapper>
      </Nav>
      </>
    )
  } else { 
    return (  
	<>
	<Nav>
		{/* <Bars /> */}
		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/petposts' activeStyle>
			Pet Posts
		</NavLink>
		<NavLink to='/about-us' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		</NavMenu>
    <ButtonWrapper>
          <Link to="/login">
            <PrimaryButton>
              Login
            </PrimaryButton>
          </Link>
    </ButtonWrapper>     
	</Nav>
	</>
)};
};

export default Navbar;
