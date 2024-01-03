import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEmployeeFirst_name = this.onChangeEmployeeFirst_name.bind(this);
    this.onChangeEmployeeLast_name = this.onChangeEmployeeLast_name.bind(this);
    this.onChangeEmployeeContact_number = this.onChangeEmployeeContact_number.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeNic = this.onChangeEmployeeNic.bind(this);
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this);
    this.onChangeEmployeeDate_of_join = this.onChangeEmployeeDate_of_join.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      first_name: '',
      last_name:'',
      contact_number: '',
      email: '',
      nic: '',
      address: '',
      date_of_join: ''
    }
  }

  onChangeEmployeeFirst_name(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeEmployeeLast_name(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeEmployeeContact_number(e) {
    this.setState({ contact_number: e.target.value })
  }

  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value })
  }

   onChangeEmployeeNic(e) {
    this.setState({ nic: e.target.value })
  }

  onChangeEmployeeAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeEmployeeDate_of_join(e) {
    this.setState({ date_of_join: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      contact_number: this.state.contact_number,
      email: this.state.email,
      nic: this.state.nic,
      address: this.state.address,
      date_of_join: this.state.date_of_join
    };
    axios.post('http://localhost:8070/employees/create-employee', employeeObject)
      .then(res => console.log(res.data));

    this.setState({ first_name: '', last_name: '', contact_number: '', email: '', nic: '', address: '', date_of_join: '' })
    this.props.history.push('/employee-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      <br>
      </br>
      <br>
      </br>
        &nbsp;&nbsp;<h2>Add Employee Details</h2>
        <br>
        </br>

        <Form.Group controlId="First_name">
          <Form.Label>Employee First_name</Form.Label>
          <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeEmployeeFirst_name} />
        </Form.Group>

        <Form.Group controlId="Last_name">
          <Form.Label>Employee Last_name</Form.Label>
          <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeEmployeeLast_name} />
        </Form.Group>

        <Form.Group controlId="Contact_number">
          <Form.Label>Contact_number</Form.Label>
          <Form.Control type="text" value={this.state.contact_number} onChange={this.onChangeEmployeeContact_number} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Nic">
          <Form.Label>Nic</Form.Label>
          <Form.Control type="text" value={this.state.nic} onChange={this.onChangeEmployeeNic} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeEmployeeAddress} />
        </Form.Group>

        <Form.Group controlId="Date_of_join">
          <Form.Label>Date_of_join</Form.Label>
          <Form.Control type="text" value={this.state.date_of_join} onChange={this.onChangeEmployeeDate_of_join} />
        </Form.Group>
         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Employee
        </Button>
        
      </Form>
    </div>);
  }
}