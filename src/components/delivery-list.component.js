import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DeliveryTableRow from './DeliveryTableRow';


export default class DeliveryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
    returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/deliverys/')
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
      return <DeliveryTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.Delivery_ID.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/deliverys/')
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
      <h2><i class="fas fa-truck"></i>&nbsp;Delivery Product Details</h2><br/>

      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;


        <Table striped bordered hover variant="warning">
      
        <thead>
          <tr>
            <th>Delivery_ID</th>
            <th>Delivery_date</th>
            <th>Quntity</th>
            <th>Another_TP_No</th>
            <th>Delivery_time</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-delivery" style={{textDecoration:'none',color:'white'}}><i class="fas fa-truck"></i>&nbsp;Add Delivery</a></button>
    </div>);
  }
}