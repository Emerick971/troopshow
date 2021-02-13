import React, { Component } from 'react';
import Partners from '../components/Partners';
import ComponentAbout from '../components/ComponentAbout';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar.js';
import '../css/About.css';


class About extends Component{
    render(){
        return( 
            <div>
                <NavBar/>
                <div className="divPageAbout">
                    <ComponentAbout/>
                    <Partners/>
                </div>
                <Footer/> 
             </div>
        )
    }
}

export default About;