import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateCustomer extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCustomerNIC = this.onChangeCustomerNIC.bind(this);
    this.onChangeCustomerFirst_name = this.onChangeCustomerFirst_name.bind(this);
    this.onChangeCustomerLast_name = this.onChangeCustomerLast_name.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerTP_num = this.onChangeCustomerTP_num.bind(this);
    this.onChangeCustomerUser_name = this.onChangeCustomerUser_name.bind(this);
    this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      NIC: '',
      first_name:'',
      last_name: '',
      email: '',
      TP_num: '',
      user_name: '',
      password: ''
    }
  }

  onChangeCustomerNIC(e) {
    this.setState({ NIC: e.target.value })
  }

  onChangeCustomerFirst_name(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeCustomerLast_name(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeCustomerEmail(e) {
    this.setState({ email: e.target.value })
  }
  
  onChangeCustomerTP_num(e) {
    this.setState({ TP_num: e.target.value })
  }

  onChangeCustomerUser_name(e) {
    this.setState({ user_name: e.target.value })
  }

  onChangeCustomerPassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const customerObject = {
      NIC: this.state.NIC,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      TP_num: this.state.TP_num,
      user_name: this.state.user_name,
      password: this.state.password
    };
    axios.post('http://localhost:8070/customers/create-customer', customerObject)
      .then(res => console.log(res.data));

    this.setState({ NIC: '', first_name: '', last_name: '', email: '', TP_num: '', user_name: '', password: '' })
    this.props.history.push('/customer-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      
      <br></br>
      <br></br>
      <br></br>
        &nbsp;&nbsp;<h2>Fill Details</h2>

        <Form.Group controlId="NIC">
          <Form.Label>NIC</Form.Label>
          <Form.Control type="text" value={this.state.NIC} onChange={this.onChangeCustomerNIC} />
        </Form.Group>

        <Form.Group controlId="First_name">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeCustomerFirst_name} />
        </Form.Group>

        <Form.Group controlId="Last_name">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeCustomerLast_name} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustomerEmail} />
        </Form.Group>

        <Form.Group controlId="TP_number">
          <Form.Label>TP number</Form.Label>
          <Form.Control type="text" value={this.state.TP_num} onChange={this.onChangeCustomerTP_num} />
        </Form.Group>

        <Form.Group controlId="User_Name">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" value={this.state.user_name} onChange={this.onChangeCustomerUser_name} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeCustomerPassword} />
        </Form.Group>
         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Customer 
        </Button>
        
      </Form>
    </div>);
  }
}