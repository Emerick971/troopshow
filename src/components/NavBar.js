import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Avatar from '../images/Avatar.svg';
import Logo from '../images/Logo.svg';
import '../css/NavBar.css'

function NavBar() {
    return (
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Brand className="logo">
               <Link to={'/'}><img
                   alt="logo TroopShow"
                   src={Logo}
                   width="auto"
                   height="30"
                   className="d-inline-block align-top"
               />{' '}</Link>
           </Navbar.Brand>
           
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Item><Link to={'/donation'}>Donation</Link></Nav.Item>
                   <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                   <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
               </Nav>
           </Navbar.Collapse>
           <Nav.Item className="avatar"><Link to={'/conexion'}><img  src={Avatar}/></Link></Nav.Item>
       </Navbar>
    )
}

export default NavBar;