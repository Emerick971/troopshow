import React, { Component } from 'react';
import '../css/ComponentContact.css'
import { Container, Form } from 'react-bootstrap';

class ComponentContact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: "",
            inputMessage: ""
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
    handleMessage = (event) => {
        //Récupère la valeur de l'input Message
        this.setState({ inputMessage: event.target.value });
    }

    render() {
        return (
            <>
                <Container>
                    <div className="divPageConnexion">
                        <h2>Hey, what's up ?</h2>
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
                        <textarea
                            className="inputTextarea"
                            value={this.state.inputMessage}
                            onChange={this.handleMessage}
                            type='text'
                            rows="5"
                            placeholder="Write your message"/>
                        <button onClick={this.buttonSearch}>Send now</button>
                    </div>
                </Container>
            </>
        )
    }
}

export default ComponentContact;