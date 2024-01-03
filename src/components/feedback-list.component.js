import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import FeedbackTableRow from './FeedbackTableRow';


export default class FeedbackList extends Component {

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
      return <FeedbackTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.cid.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/feedbacks/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }




  render() {
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
      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;




        <Table striped bordered hover variant="dark">
       
        <thead>
          <tr>
          
            <th>Cid</th>
            <th>Name</th>
            <th>Email</th>
            <th>User-Type</th>
            <th>Contac-No</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-feedback" style={{textDecoration:'none',color:'white'}}> <i class="far fa-comment-alt"></i>&nbsp;Add Feedback</a></button>
      &nbsp;
      &nbsp;
      <button className="btn btn-success"><a href="/feedbackPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>
    </div>);

  }
}
