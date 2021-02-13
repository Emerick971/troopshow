import React from 'react';
import NavBar from '../components/NavBar.js';
import Container from 'react-bootstrap/Container';
import '../css/VideoPage.css';
import Footer from '../components/Footer';
import{Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SlideMovie from '../components/Slide';

class VideoPage extends React.Component {
constructor(props){
    super(props);

    this.state = {
        slide:""
    }
}

handleChange(slide){
    alert(slide);
   // this.setState({title: title, description: description});
} 

    render(){
    return (
        <div>
            <NavBar />
           
            <Container onClickCard={this.handleChange}>
                <div className="VideoContainer">
                    <video width="90%" height="auto" controls>
                        <source src="movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                    </video>
                    <div>
                        <div className="VideoDescription">
                            <h4>{this.state.title}</h4>
                            <p>{this.state.description}</p>
                        </div>
                        <Link to={'/donation'}><Button variant="outline-light">Make a donation</Button></Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>

    )
    }
};

export default VideoPage;