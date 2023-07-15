import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/images/logo1.png';
import '../Assets/styles/Nav.css';

import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
const NavBar = () => {
    // Collpase isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
            <Navbar color="light" light expand="md" className='Navbarmain'>
                <NavbarBrand>
                    <img src={logo} className='logo' alt='logo'/>
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Productlist">PRODUCTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">SERVICES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </>
  )
}

export default NavBar;