import React from 'react';
import NavBar from '../components/NavBar.js';
import Container from 'react-bootstrap/Container';
import '../css/VideoPage.css';
import Footer from '../components/Footer';
import{Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VideoPage() {
    return (
        <div>
            <NavBar />

            <Container>
                <div className="VideoContainer">
                    <video width="90%" height="auto" controls>
                        <source src="movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                    </video>
                    <div>
                        <div className="VideoDescription">
                            <h4>Title Show</h4>
                            <p>Description Show<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <Link to={'/donation'}><Button variant="outline-light">Make a donation</Button></Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>

    )

};

export default VideoPage;