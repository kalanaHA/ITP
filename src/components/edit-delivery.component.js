import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditDelivery extends Component {

  constructor(props) {
    super(props)

    this.onChangeDeliveryDelivery_ID = this.onChangeDeliveryDelivery_ID.bind(this);
    this.onChangeDeliveryDelivery_date = this.onChangeDeliveryDelivery_date.bind(this);
    this.onChangeDeliveryQuntity = this.onChangeDeliveryQuntity.bind(this);
    this.onChangeDeliveryAnother_TP_No = this.onChangeDeliveryAnother_TP_No.bind(this);
    this.onChangeDeliveryDelivery_time = this.onChangeDeliveryDelivery_time.bind(this);
   
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      Delivery_ID: '',
      Delivery_date:'',
      Quntity: '',
      Another_TP_No: '',
      Delivery_time: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/deliverys/edit-delivery/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Delivery_ID: res.data.Delivery_ID,
          Delivery_date: res.data.Delivery_date,
          Quntity: res.data.Quntity,
          Another_TP_No: res.data.Another_TP_No,
          Delivery_time: res.data.Delivery_time,
 
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      Another_TP_NoAnother_TP_No: this.state.Another_TP_No,
      Delivery_time: this.state.Delivery_time,
    };

    axios.put('http://localhost:8070/deliverys/update-delivery/' + this.props.match.params.id, deliveryObject)
      .then((res) => {
        console.log(res.data)
        console.log('Delivery successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to delivery List 
    this.props.history.push('/delivery-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
      &nbsp;&nbsp;<h3>Update Delivary</h3> 
      <Form.Group controlId="Delivery_ID">
          <Form.Label>Delivery_ID</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_ID} onChange={this.onChangeDeliveryDelivery_ID} />
        </Form.Group>

        <Form.Group controlId="Delivery_date">
          <Form.Label>Delivery_date</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_date} onChange={this.onChangeDeliveryDelivery_date} />
        </Form.Group>

        <Form.Group controlId="Quntity">
          <Form.Label>Quntity</Form.Label>
          <Form.Control type="text" value={this.state.Quntity} onChange={this.onChangeDeliveryQuntity} />
        </Form.Group>

        <Form.Group controlId="Another_TP_No">
          <Form.Label>Another_TP_No</Form.Label>
          <Form.Control type="text" value={this.state.Another_TP_No} onChange={this.onChangeDeliveryAnother_TP_No} />
        </Form.Group>

        <Form.Group controlId="Delivery_time">
          <Form.Label>Delivery_time</Form.Label>
          <Form.Control type="text" value={this.state.Delivery_time} onChange={this.onChangeDeliveryDelivery_time} />
        </Form.Group>


        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        Update Delivery
        </Button>
      </Form>
    </div>);
  }
}