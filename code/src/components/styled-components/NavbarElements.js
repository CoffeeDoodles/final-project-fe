import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components/macro';
  
export const NavbarWrapper = styled.div`
  background-color: #50B9CD;
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;  
  align-items: center;
  margin: 0;
  font-size: 26px;
  font-weight: bold;
`;

export const MobileWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`
  
export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFB560;
  }
`;
  
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5rem;
  text-wrap: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  

export const ButtonWrapper = styled.div`
  margin: 0 2rem;
  padding: 0;
  width: 130px;
`
export const Button = styled.button`
  border-radius: 10px;
  font-size: 16px;
  font-weight: 100;
  width: 100%;
  margin: 10px 5px 10px 0;
  padding: 10px 20px;
  border: 3px solid white;
  background-color: #8FE0EF;
  &:hover {
    background-color: #D1F8FF;
  }
  cursor: pointer;
`

export const LogoWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (min-width: 768px) {
    position: relative;
    top: 1rem;
    left: -14rem;
  }
`

export const HeaderLogo = styled.img`
  max-height: 90px;
`

