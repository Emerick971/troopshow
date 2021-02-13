import React, { Component } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar.js';
import ComponentContact from '../components/ComponentContact';

class Contact extends Component {
    render(){
        return( 
            <div>
                <NavBar/>
                <ComponentContact/>
                <Footer/> 
            </div>
        )
    }
}

export default Contact;