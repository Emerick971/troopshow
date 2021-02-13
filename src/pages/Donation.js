import React from 'react';
import NavBar from '../components/NavBar.js';
import DonationDetails from '../components/DonationDetails';
import Footer from '../components/Footer';


//CSS

import '../css/Donation.css';

class Donation extends React.Component {



    render() {
        return(
            <div>
                <NavBar />
                <div className="DonationTitleContainer">
                    <h3>Donation in full transparency</h3>
                    <p>Lorem ipsum</p>
                </div>
                <div className="DonationClass">
                <DonationDetails />
               
                </div>
                <Footer/>
            </div> 
        )  
    }
}
export default Donation;