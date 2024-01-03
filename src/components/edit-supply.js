import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditSupply extends Component {

  constructor(props) {
    super(props)

    this.onChangeSupplyItem = this.onChangeSupplyItem.bind(this);
    this.onChangeSupplyName = this.onChangeSupplyName.bind(this);
    this.onChangeSupplyEmail = this.onChangeSupplyEmail.bind(this);
    this.onChangeSupplyPhoneno = this.onChangeSupplyPhoneno.bind(this);
    this.onChangeSupplyUsername = this.onChangeSupplyUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      item: '',
      name:'',
      email: '',
      phoneno: '',
      username: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/supplys/edit-supply/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          item: res.data.item,
          name: res.data.name,
          email: res.data.email,
          phoneno: res.data.phoneno,
          username: res.data.username
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      username: this.state.username
     
    };

    axios.put('http://localhost:8070/supplys/update-supply/' + this.props.match.params.id, supplyObject)
      .then((res) => {
        console.log(res.data)
        console.log('Supply successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to supply List 
    this.props.history.push('/supply-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Item">
        <br>
        </br>
        <br>
        </br>
      &nbsp;&nbsp;<h1>Update</h1>
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
          <Form.Control type="text" value={this.state.phoneno} onChange={this.onChangeSupplyPhoneno} maxLength="10" />
        </Form.Group>

        <Form.Group controlId="Username">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.onChangeSupplyUsername} />
        </Form.Group>

        <br/>
        <Button variant="success" block="block" type="submit">
          Update 
        </Button>
      </Form>
    </div>);
  }
}