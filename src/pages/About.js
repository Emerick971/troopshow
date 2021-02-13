import React, { Component } from 'react';
import Partners from '../components/Partners';
import ComponentAbout from '../components/ComponentAbout';
import Footer from '../components/Footer';
import '../pages/About.css';


class About extends Component{
    render(){
        return( 
            <div>
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