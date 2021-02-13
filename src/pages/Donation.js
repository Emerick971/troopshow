import React from 'react';
import MyDonation from '../components/MyDonation';
import DonationDetails from '../components/DonationDetails';
import DonationBill from '../components/DonationBill';

class Donation extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <h3>Title</h3>
                    <p>Lorem ipsum</p>
                </div>
                <MyDonation />
                <DonationDetails />
                <DonationBill />
            </div>
        )
    }
}

export default Donation;