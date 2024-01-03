import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateDelivery extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeDeliveryDelivery_ID = this.onChangeDeliveryDelivery_ID.bind(this);
    this.onChangeDeliveryDelivery_date = this.onChangeDeliveryDelivery_date.bind(this);
    this.onChangeDeliveryQuntity = this.onChangeDeliveryQuntity.bind(this);
    this.onChangeDeliveryAnother_TP_No = this.onChangeDeliveryAnother_TP_No.bind(this);
    this.onChangeDeliveryDelivery_time = this.onChangeDeliveryDelivery_time.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Delivery_ID: '',
      Delivery_date:'',
      Quntity: '',
      Another_TP_No: '',
      Delivery_time: ''
      
    }
  }

  onChangeDeliveryDelivery_ID(e) {
    this.setState({ Delivery_ID: e.target.value })
  }

  onChangeDeliveryDelivery_date(e) {
    this.setState({ Delivery_date: e.target.value })
  }

  onChangeDeliveryQuntity(e) {
    this.setState({ Quntity: e.target.value })
  }

  onChangeDeliveryAnother_TP_No(e) {
    this.setState({ Another_TP_No: e.target.value })
  }
  
  onChangeDeliveryDelivery_time(e) {
    this.setState({ Delivery_time: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const deliveryObject = {
      Delivery_ID: this.state.Delivery_ID,
      Delivery_date: this.state.Delivery_date,
      Quntity: this.state.Quntity,
      Another_TP_No: this.state.Another_TP_No,
      Delivery_time: this.state.Delivery_time,
      
     
    };
    axios.post('http://localhost:8070/deliverys/create-delivery', deliveryObject)
      .then(res => console.log(res.data));

    this.setState({ Delivery_ID: '', Delivery_date: '', Quntity: '', Another_TP_No: '', Delivery_time: '' })
    this.props.history.push('/delivery-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      
      <br>
      </br>
        &nbsp;&nbsp;<h3>Fill Details</h3>

        <Form.Group controlId="Delivery_ID">
          <Form.Label>Delivery_ID</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_ID} onChange={this.onChangeDeliveryDelivery_ID} />
        </Form.Group>

        <Form.Group controlId="Delivery_date">
          <Form.Label>Delivery date</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_date} onChange={this.onChangeDeliveryDelivery_date} />
        </Form.Group>

        <Form.Group controlId="Quntity">
          <Form.Label>Quntity</Form.Label>
          <Form.Control type="text" value={this.state.Quntity} onChange={this.onChangeDeliveryQuntity} />
        </Form.Group>

        <Form.Group controlId="Another_TP_No">
          <Form.Label>Another TP No</Form.Label>
          <Form.Control type="text" value={this.state.Another_TP_No} onChange={this.onChangeDeliveryAnother_TP_No} />
        </Form.Group>

        <Form.Group controlId="Delivery_time">
          <Form.Label>Delivery_time</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_time} onChange={this.onChangeDeliveryDelivery_time} />
        </Form.Group>

        
         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-truck"></i>&nbsp;
          Add Delivery
        </Button>
        
      </Form>
    </div>);
  }
}