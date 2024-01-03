import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import FeedbackTableRow2 from './FeedbackTableRow2';


export default class feedbackPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:8070/feedbacks/')
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
      return <FeedbackTableRow2 obj={res} key={i} />;
    });
  }

  render() {

    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper" style={{color:"#000000"}}>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <h2><i class="far fa-comment-alt"></i>&nbsp;Feedback Details</h2><br/>
    


        <Table striped bordered hover variant="white">
       
        <thead>
          <tr>
          
            <th>CID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User-Type</th>
            <th>Contac-No</th>
            <th>Comment</th>
            
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

