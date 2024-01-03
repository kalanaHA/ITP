import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PaymentTableRow from './PaymentTableRow';


export default class PaymentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/payments/')
      .then(res => {
        this.setState({
          returns: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <PaymentTableRow obj={res} key={i} />;
    });
  }


  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.card_number.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/payments/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }



  render() {
    return (<div className="table-wrapper">
      <br/>
      <br/>
      <br/>
      <h2> <i class="fas fa-credit-card"></i>&nbsp;CHECKOUT</h2><br/>


      <form className="md-3">
     
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
        
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Type</th>
            <th>Holders Name</th>
            <th>CVV</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-payment" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-credit-card"></i>&nbsp;Add Checkout</a></button>
      &nbsp;
      &nbsp;
      <button className="btn btn-success"><a href="/paymentPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>

    
    </div>);
  }
}