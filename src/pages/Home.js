import React from 'react';
import NavBar from '../components/NavBar.js';
import Container from 'react-bootstrap/Container';
import ListComingShows from '../components/ListComingShows';
import Slide from '../components/Slide';
import Footer from '../components/Footer';
import LiveShow from '../components/LiveShow';
import Partners from '../components/Partners.js';

function Home() {
    return (
        <div>
            <NavBar />

            <Container>
                <LiveShow />
                <Slide title={'Replay'}/>
                <Slide title={'Musical'}/>
                <Slide title={'kids'}/>
                <Slide title={'dance'}/>
                <ListComingShows />
                <Partners />
            </Container>
            <Footer />
        </div>

    )

};

export default Home;