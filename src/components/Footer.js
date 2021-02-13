import React, { Component } from 'react';
import '../css/Footer.css'
import ImgFooter from '../images/LogoFooter.svg';
import{Button, Container}  from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return( 
            <div className="divFooter">
                <Container className="ContentFooter">
                    <div>
                        <img src={ImgFooter} alt='logo' />
                        <p><small>ECSM Coorporation, 2021 </small></p>
                    </div>
                    <div>
                        <p>Support the local entertainment ARTISTS !</p>
                        <Link to={'/connexion'}><Button variant="outline-light">Make a donation</Button></Link>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Footer;