import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateSupply extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeSupplyItem = this.onChangeSupplyItem.bind(this);
    this.onChangeSupplyName = this.onChangeSupplyName.bind(this);
    this.onChangeSupplyEmail = this.onChangeSupplyEmail.bind(this);
    this.onChangeSupplyPhoneno = this.onChangeSupplyPhoneno.bind(this);
    this.onChangeSupplyUsername = this.onChangeSupplyUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      item: '',
      name:'',
      email: '',
      phoneno: '',
      username: ''
     
     
    }
  }

  onChangeSupplyItem(e) {
    this.setState({ item: e.target.value })
  }

  onChangeSupplyName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeSupplyEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeSupplyPhoneno(e) {
    this.setState({ phoneno: e.target.value })
  }
  
  onChangeSupplyUsername(e) {
    this.setState({ username: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const supplyObject = {
      item: this.state.item,
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno,
      username: this.state.username,
    
    };
    axios.post('http://localhost:8070/supplys/create-supply', supplyObject)
      .then(res => console.log(res.data));

    this.setState({ item: '', name: '', email: '', phoneno: '', username: '' })
    this.props.history.push('/supply-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

       <br></br>
        &nbsp;&nbsp;<h3>Fill Details</h3>

        <Form.Group controlId="Item">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" value={this.state.item} onChange={this.onChangeSupplyItem} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Supply Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeSupplyName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeSupplyEmail} />
        </Form.Group>

        <Form.Group controlId="Phoneno">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" value={this.state.phoneno} onChange={this.onChangeSupplyPhoneno} maxLength="10"/>
        </Form.Group>

        <Form.Group controlId="Username">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.onChangeSupplyUsername} />
        </Form.Group>
         
        <br/>
        <Button variant="warning"  block="block" type="submit">
          Create
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        

      </Form>
    </div>);
  }
}