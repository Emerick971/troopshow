import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
           <Navbar.Brand >
               <Link to={'/'}><img
                   alt=""
                   src="/logo.svg"
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
               />{' '}
               TroopShow</Link>
           </Navbar.Brand>
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Item><Link to={'/donation'}>Donation</Link></Nav.Item>
                   <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                   <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
               </Nav>
           </Navbar.Collapse>
           <Button variant="outline-primary">Log in</Button>
          
       </Navbar>
    )
}

export default NavBar;