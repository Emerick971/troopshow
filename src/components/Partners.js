import React, { Component } from 'react';
import './Partners.css'

class Partners extends Component{
    render(){
        return( 
            <div className="divPartners">
                <h2>Our Partners</h2>
                <div className="divPartnersIMG">
                    <img src='https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png'/>
                    <img src='https://thumbor.sd-cdn.fr/zMYjUVF1N69TvvAmI-aRRvj4iMU=/940x550/cdn.sd-cdn.fr/wp-content/uploads/2020/10/twilio.jpg'/>
                    <img src='https://alloforfait.fr/wp-content/uploads/2019/12/logo-arte.jpg'/>
                </div>
            </div>
        )
    }
}

export default Partners;