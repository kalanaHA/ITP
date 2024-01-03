import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './EmployeeTableRow';


export default class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/employees/')
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
      return <EmployeeTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.nic.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/employees/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }



  render() {
    return (<div className="table-wrapper">
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      <h2><i class="fas fa-users"></i>&nbsp;Employee Details</h2><br/>
      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover variant="warning">
      
        <thead>
          <tr>
            <th>First_name</th>
            <th>Last_name</th>
            <th>Contact_number</th>
            <th>Email</th>
            <th>Nic</th>
            <th>Address</th>
            <th>Date_of_join</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-employee" style={{textDecoration:'none',color:'white'}}>  <i class="fas fa-users"></i>&nbsp;Add Employee</a></button>
    </div>);
  }
}