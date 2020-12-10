import React, { useState } from 'react';
import { Link } from "gatsby";
import { HeaderContainer, HeaderLogo } from "./styles.js";
import Logo from '../../assets/rick-and-morty-logo.png'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <HeaderContainer>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
        <HeaderLogo>
            <img src={Logo} alt="Logo"/>
        </HeaderLogo>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
                <Link to="/characters">
                Characters
                </Link>
            </NavItem>
            <NavItem>
             <Link to="/aboutus">
                 About us
                 </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
