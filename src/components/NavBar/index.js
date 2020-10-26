import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
 Nav,
 NavLogo,
 NavContainer,
 MobileIcon,
 NavMenu,
 NavItem,
 NavLinks,
 NavBtn,
 NavBtnLink } from './NavBarElements';

const NavBar = () => {
 return (
  <>
    <Nav>
     <NavContainer>
      <NavLogo to='/'>Dabistech</NavLogo>
      <MobileIcon>
       <FaBars />
      </MobileIcon>
      <NavMenu>
       <NavItem>
        <NavLinks to='about'>About</NavLinks>
       </NavItem>
       <NavItem>
        <NavLinks to='services'>Services</NavLinks>
       </NavItem>
       <NavItem>
        <NavLinks to='projects'>Projects</NavLinks>
       </NavItem>
       <NavItem>
        <NavLinks to='contact'>Contact</NavLinks>
       </NavItem>
      </NavMenu>
      <NavBtn>
       <NavBtnLink to="/contact">Contact Me</NavBtnLink>
      </NavBtn>
     </NavContainer>
    </Nav>
  </>
 );
};

export default NavBar;
