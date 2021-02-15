import React from 'react';
import {Container, Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

import '../css/VideoPage.css';




export default class VideoComponent extends React.Component {

    render() {
        return (
            <Container onClickVideo={(title1, description) => this.handleChange(title1, description)}>
                <div className="VideoContainer" >
                    <video width="90%" height="auto" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                    {
                        this.state.title && this.state.description !== '' &&
                        <div>
                            <div className="VideoDescription">
                                <h4>{this.state.title}</h4>
                                <p>{this.state.description}</p>
                            </div>
                            <Link to={'/donation'}><Button variant="outline-light">Make a donation</Button></Link>
                        </div>
                    }
                </div>
            </Container>
        )
    }
}