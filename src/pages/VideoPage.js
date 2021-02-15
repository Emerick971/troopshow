import React from 'react';
import NavBar from '../components/NavBar.js';
import {Container, Button} from 'react-bootstrap';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../css/VideoPage.css';


function VideoPage(props) {

    return (
        <div>
            <NavBar />
            <Container>
                <div className="VideoContainer" >
                    <video width="90%" height="auto" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                
                        <div>
                            <div className="VideoDescription">
                                <h4>{props.match.params.title}</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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