import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PaymentTableRow2 from './PaymentTableRow2';


export default class paymentPDF extends Component {

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
      return <PaymentTableRow2 obj={res} key={i} />;
    });
  }


  
  render() {
    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper">
      <br/>
      <br/>
      <br/>
      <h2> <i class="fas fa-credit-card"></i>&nbsp;Payment History</h2><br/>


      

        <Table striped bordered hover variant="white">
      
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Type</th>
            <th>Holders Name</th>
            <th>CVV</th>
            <th>Expiry Date</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button onClick= {printPage}>Print</button>
    </div>);
  }
}