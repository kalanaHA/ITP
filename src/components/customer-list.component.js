import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CustomerTableRow from './CustomerTableRow';


export default class CustomerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/customers/')
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
      return <CustomerTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.NIC.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/customers/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }




  render() {
    return (<div className="table-wrapper">
       <br></br>
      <br></br>
      <br></br>
      <h2><i class="fas fa-users"></i>&nbsp;Customer Details</h2><br/>

      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover variant="warning">
      
        <thead>
          <tr>
            <th>NIC</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>TP number</th>
            <th>User name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-customer" style={{textDecoration:'none',color:'white'}}><i class="fas fa-users"></i>&nbsp;Add New Customer</a></button>
    </div>);
  }
}