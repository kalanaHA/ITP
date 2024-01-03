import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './css/stockCss.css'

export default class EditStock extends Component {

  constructor(props) {
    super(props)

    this.onChangeStockStockid = this.onChangeStockStockid.bind(this);
    this.onChangeStockItemcode = this.onChangeStockItemcode.bind(this);
    this.onChangeStockQuntity = this.onChangeStockQuntity.bind(this);
    this.onChangeStockPrice = this.onChangeStockPrice.bind(this);
    this.onChangeStockDiscount = this.onChangeStockDiscount.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      stockid: '',
      itemcode:'',
      quntity: '',
      price: '',
      discount: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/stocks/edit-stock/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          stockid: res.data.stockid,
          itemcode: res.data.itemcode,
          quntity: res.data.quntity,
          price: res.data.price,
          discount: res.data.discount

        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStockStockid(e) {
    this.setState({ stockid: e.target.value })
  }

  onChangeStockItemcode(e) {
    this.setState({ itemcode: e.target.value })
  }

  onChangeStockQuntity(e) {
    this.setState({ quntity: e.target.value })
  }

  onChangeStockPrice(e) {
    this.setState({ price: e.target.value })
  }
  
  onChangeStockDiscount(e) {
    this.setState({ discount: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const stockObject = {
      stockid: this.state.stockid,
      itemcode: this.state.itemcode,
      quntity: this.state.quntity,
      price: this.state.price,
      discount: this.state.discount
    };

    axios.put('http://localhost:8070/stocks/update-stock/' + this.props.match.params.id, stockObject)
      .then((res) => {
        console.log(res.data)
        console.log('stock successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to return List 
    this.props.history.push('/stock-list')
  }


  render() {
    return (
      <div className="backg">
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
      &nbsp;&nbsp;<h3>Update Details</h3>
      <Form.Group controlId="Stockid">
          <Form.Label>Stock Id</Form.Label>
          <Form.Control type="text" value={this.state.stockid} onChange={this.onChangeStockStockid} />
        </Form.Group>

        <Form.Group controlId="Itemcode">
          <Form.Label>Item Code</Form.Label>
          <Form.Control type="text" value={this.state.itemcode} onChange={this.onChangeStockItemcode} />
        </Form.Group>

      <Form.Group controlId="Quntity">
          <Form.Label>Quntity</Form.Label>
          <Form.Control type="text" value={this.state.quntity} onChange={this.onChangeStockQuntity} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeStockPrice} />
        </Form.Group>

        <Form.Group controlId="Discount">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="text" value={this.state.discount} onChange={this.onChangeStockDiscount} />
        </Form.Group>

        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>
    </div>
    );
  }
}