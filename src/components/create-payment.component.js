import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePayment extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangePaymentCard_number = this.onChangePaymentCard_number.bind(this);
    this.onChangePaymentType = this.onChangePaymentType.bind(this);
    this.onChangePaymentHolders_name = this.onChangePaymentHolders_name.bind(this);
    this.onChangePaymentCvv = this.onChangePaymentCvv.bind(this);
    this.onChangePaymentExpiry_date = this.onChangePaymentExpiry_date.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      card_number:'',
      type:'',
      holders_name:'',
      cvv:'',
      expiry_date:''
      
    }
  }

  onChangePaymentCard_number(e) {
    this.setState({ card_number: e.target.value })
  }

  onChangePaymentType(e) {
    this.setState({ type: e.target.value })
  }

  onChangePaymentHolders_name(e) {
    this.setState({ holders_name: e.target.value })
  }

  onChangePaymentCvv(e) {
    this.setState({ cvv: e.target.value })
  }
  
  onChangePaymentExpiry_date(e) {
    this.setState({ expiry_date: e.target.value })
  }

 
  onSubmit(e) {
    e.preventDefault()

    const paymentObject = {
      card_number: this.state.card_number,
      type: this.state.type,
      holders_name: this.state.holders_name,
      cvv: this.state.cvv,
      expiry_date: this.state.expiry_date
     
    };
    axios.post('http://localhost:8070/payments/create-payment', paymentObject)
      .then(res => console.log(res.data));

    this.setState({ card_number: '', type: '', holders_name: '', cvv: '', expiry_date: '' })
    this.props.history.push('/payment-list')
  }
  

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
        <br>
        </br>
        

      
        &nbsp;&nbsp;<h3>Fill Details</h3>

        <Form.Group controlId="Card_number">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" value={this.state.card_number} onChange={this.onChangePaymentCard_number}  required />
        </Form.Group>

        <Form.Group controlId="Type">
          <Form.Label>Type</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.type} onChange={this.onChangePaymentType}  required />
        </Form.Group>

        <Form.Group controlId="Holders_name">
          <Form.Label>Holders Name</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.holders_name} onChange={this.onChangePaymentHolders_name}  required
           />
        </Form.Group>

        <Form.Group controlId="Cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="number" value={this.state.cvv} onChange={this.onChangePaymentCvv}  required />
        </Form.Group>

        <Form.Group controlId="Expiry_date">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="date" value={this.state.expiry_date} onChange={this.onChangePaymentExpiry_date}  required />
        </Form.Group>

      
        
        <br/>
        <Button variant="success" size="lg" block="block" type="submit" > 
        <i class="fas fa-credit-card"></i>&nbsp; Save
        </Button>
        
        <br>
        </br>
        <br>
        </br>

        
      </Form>
    </div>);
  }
}