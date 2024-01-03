import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPayment extends Component {

  constructor(props) {
    super(props)

    this.onChangePaymentCard_number = this.onChangePaymentCard_number.bind(this);
    this.onChangePaymentType = this.onChangePaymentType.bind(this);
    this.onChangePaymentHolders_name = this.onChangePaymentHolders_name.bind(this);
    this.onChangePaymentCvv = this.onChangePaymentCvv.bind(this);
    this.onChangePaymentExpiry_date = this.onChangePaymentExpiry_date.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      card_number: '',
      type:'',
      holders_name: '',
      cvv: '',
      expiry_date: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/payments/edit-payment/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          card_number: res.data.card_number,
          type: res.data.type,
          holders_name: res.data.holders_name,
          cvv: res.data.cvv,
          expiry_date: res.data.expiry_date,
       
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:8070/payments/update-payment/' + this.props.match.params.id, paymentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Payment successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to return List 
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
        &nbsp;&nbsp;
      <Form.Group controlId="Card Number">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" value={this.state.card_number} onChange={this.onChangePaymentCard_number} />
        </Form.Group>

        <Form.Group controlId="Type">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" value={this.state.type} onChange={this.onChangePaymentType} />
        </Form.Group>

        <Form.Group controlId="Holders Email">
          <Form.Label>Holders Name</Form.Label>
          <Form.Control type="text" value={this.state.holders_name} onChange={this.onChangePaymentHolders_name} />
        </Form.Group>

        <Form.Group controlId="CVV">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="text" value={this.state.cvv} onChange={this.onChangePaymentCvv} />
        </Form.Group>

        <Form.Group controlId="Expiry Date">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="text" value={this.state.expiry_date} onChange={this.onChangePaymentExpiry_date} />
        </Form.Group>


        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}