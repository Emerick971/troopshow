import React from 'react';
import NavBar from '../components/NavBar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Home() {
    return (
        <div>
            <NavBar/>
            <Container>
                <h1>The Show must go on</h1>
            </Container>
        </div>
    )

};
  
export default Home;