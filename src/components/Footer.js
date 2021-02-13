import React, { Component } from 'react';
import '../css/Footer.css'
import ImgFooter from '../images/LogoFooter.svg'
import{Button}  from 'react-bootstrap';

class Footer extends Component{
    render(){
        return( 
            <div className="divFooter">
                <div>
                    <img src={ImgFooter} alt='logo' />
                    <p><small>ECSM Coorporation, 2021 </small></p>
                </div>
                <div>
                    <p>Support the local entertainment ARTISTS !</p>
                    <Button variant="outline-light">Make a donation</Button>
                </div>
            </div>
        )
    }
}

export default Footer;