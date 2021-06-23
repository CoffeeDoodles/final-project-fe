import {  NavLink  } from '../styled-components/NavbarElements'

const NavLinks = () => {
  return ( 
    <>
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
  </>
   )
}

export default NavLinks