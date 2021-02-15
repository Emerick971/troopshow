import React from 'react';
import { Navbar, Container }from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Avatar from '../images/Avatar.svg';
import Logo from '../images/Logo.svg';
import '../css/NavBar.css'

function NavBar() {
    return (
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="logo">
                    <Link to={'/'}><img
                        alt="logo TroopShow"
                        src={Logo}
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        <h6 className='baseline'>The Show must go on</h6></Link>
                </Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item><Link to={'/donation'}>Donation</Link></Nav.Item>
                        <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                        <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Link to={'/connexion'} className="avatar"><img src={Avatar}/></Link>
            </Container>
            
       </Navbar>
    )
}

export default NavBar;