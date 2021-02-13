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
            inputMessage: "",
            messageSend:false
        }
    } // initialisation du state

    buttonSearch(){
        if(this.state.inputFirstName !="" && this.state.inputLastName !="" && this.state.inputEmail !="" && this.state.inputMessage !=""){
            this.setState({messageSend:true});
        }    
    }

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

    submitForm = (event) => {
        event.preventefault();
    }

    render() {
        return (
            <>
                <Container>
                    <form className="divPageConnexion" onSubmit={this.submitForm}>
                        <h2>Hey, what's up ?</h2>
                        <div>
                            <input //input first name
                                required={true}
                                className="inputDivise"
                                value={this.state.inputFirstName}
                                onChange={this.handleFN}
                                type='text'
                                placeholder="First Name">
                            </input>
                            <input //input last name
                                required={true}
                                className="inputDivise"
                                value={this.state.inputLastName}
                                onChange={this.handleLN}
                                type='text'
                                placeholder="Last Name">
                            </input>
                        </div>
                        <input //input email
                            className="inputEntier"
                            value={this.state.inputEmail}
                            onChange={this.handleEmail}
                            type='email'
                            placeholder="Email adress"
                          required={true}>
                        </input>
                        <textarea //input message
                            required
                            className="inputTextarea"
                            value={this.state.inputMessage}
                            onChange={this.handleMessage}
                            type='text'
                            rows="5"
                            placeholder="Write your message"
                          required={true}/>
                        <button type="submit" value='submit' onClick={(e) => this.buttonSearch(e)}>Send now</button>
                    </form>
                    {
                        this.state.messageSend != false && 
                        <p>Your message has been sent</p>
                    }
                </Container>
            </>
        )
    }
}

export default ComponentContact;