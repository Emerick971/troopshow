import React, { Component } from 'react';
import '../css/Connexion.css';
import NavBar from '../components/NavBar.js';
import { Container, Form } from 'react-bootstrap';

class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: "",
            inputPassword: ""
        }
    } // initialisation du state

    //buttonSearch = () => {
    //this.props.onSearch(this.state.inputFirstName)
    // Soulève un évènement et on passe une variable
    //}

    handleFN = (event) => {
        //Récupère la valeur de l'input First Name
        this.setState({ inputFirstName: event.target.value });
    }
    handleLN = (event) => {
        //Récupère la valeur de l'input Last Name
        this.setState({ inputLastName: event.target.value });
    }
    handleEmail = (event) => {
        //Récupère la valeur de l'input Email
        this.setState({ inputEmail: event.target.value });
    }
    handlePassword = (event) => {
        //Récupère la valeur de l'input Password
        this.setState({ inputPassword: event.target.value });
    }

    render() {
        return (

            <>
                <NavBar />
                <Container>
                    <div className="divPageConnexion">
                        <h2>Sign up for a free account</h2>
                        <div>
                            <input
                                className="inputDivise"
                                value={this.state.inputFirstName}
                                onChange={this.handleFN}
                                type='text'
                                placeholder="First Name">
                            </input>
                            <input
                                className="inputDivise"
                                value={this.state.inputLastName}
                                onChange={this.handleLN}
                                type='text'
                                placeholder="Last Name">
                            </input>
                        </div>
                        <input
                            className="inputEntier"
                            value={this.state.inputEmail}
                            onChange={this.handleEmail}
                            type='email'
                            placeholder="Email adress">
                        </input>
                        <input
                            className="inputEntier"
                            value={this.state.inputPassword}
                            onChange={this.handlePassword}
                            type='password'
                            placeholder="Create password">
                        </input>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I'm an artist" />
                        </Form.Group>
                        <button onClick={this.buttonSearch}>Register</button>
                    </div>
                </Container>
            </>
        )
    }
}

export default Connexion;