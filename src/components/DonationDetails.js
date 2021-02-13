import React from 'react';
import Form from 'react-bootstrap/Form';


import { InputGroup, FormControl, Button } from 'react-bootstrap';

class DonationDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: ""
        }
    }

    handleEmail = (event) => {
        //Récupère la valeur de l'input Email
        this.setState({ inputEmail: event.target.value });
    }

    handleFN = (event) => {
        //Récupère la valeur de l'input First Name
        this.setState({ inputFirstName: event.target.value });
    }
    handleLN = (event) => {
        //Récupère la valeur de l'input Last Name
        this.setState({ inputLastName: event.target.value });
    }

    render() {
        return(
          <div className="donateForm"> 
            <Form>
              <input
                  className="inputEntier"
                  value={this.state.inputEmail}
                  onChange={this.handleEmail}
                  type='email'
                  placeholder="Email adress">
              </input>
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
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group  controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group  controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group  controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                   </InputGroup>
              </div>
              
              <Button variant="primary" type="submit">
                  Submit
              </Button>
              
            </Form>
            <img src="https://www.easytransac.com/img/front-visa-mc.png" />
          </div>
        )
    }
}

export default DonationDetails;