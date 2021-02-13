import React, { Component } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar.js';


class Contact extends Component{
    render(){
        return( 
            <div>
                <NavBar/>
                <Contact/>
                <Footer/> 
             </div>
        )
    }
}

export default Contact;