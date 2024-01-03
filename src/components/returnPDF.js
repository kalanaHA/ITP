import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ReturnTableRow2 from './ReturnTableRow2';
import Button from 'react-bootstrap/Button';


export default class returnPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/returns/')
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
      return <ReturnTableRow2 obj={res} key={i} />;
    });
  }


  render() {
    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper">
    <br/><br/> 
    <br/>
     <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject Details</h2><br/>
    
    

    <Table striped bordered hover variant="white">
      
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Teacher's Name</th>
            <th>Class</th>
            <th>Language</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <Button variant="outline-success" size="lg" block="block" type="submit" onClick= {printPage}>Print</Button>
 
    </div>);
  }
}