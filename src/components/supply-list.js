import React, { Component, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SupplyTableRow from './SupplyTableRow';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class SupplyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: [],
      
    };
    this.deleteSupply = this.deleteSupply.bind(this);
  }
  // componentDidMount() {
  //   axios.get('http://localhost:8070/supplys/')
  //     .then(res => {
  //       this.setState({
  //         returns: res.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  componentDidMount() {
    axios.get('http://localhost:8070/supplys/')
      .then(res => {
        const returns = res.data;
        this.setState({ returns });
      })
}

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <SupplyTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.item.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/supplys/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }

//   deleteSupply() {
//     axios.delete('http://localhost:8070/supplys/delete-supply/' + this.returns._id)
//         .then((res) => {
//             alert('successfully deleted!')
//         }).catch((error) => {
//             console.log(error)
//         })
// }

//delete method
deleteSupply(id) {
  axios.delete('http://localhost:8070/supplys/delete-supply/'+id)
    .then(response => {
     this.componentDidMount();
});
}

  render() {
    return (<div className="table-wrapper">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h2><i class="fas fa-users"></i>&nbsp;Supply Details</h2><br/>
      <br>
      </br>
      

      <input 
                  // className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchTerm"
                  onChange={this.handleTextSearch}
                  ></input>
                  <br>
                  </br>
                  <br/>
      <Table striped bordered hover variant="warning">
      
     
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        {this.state.returns.map(list =>
        <tbody>
          
          {/* {this.DataTable()} */}
           {/* <td>{this.item}</td>
                <td>{this.name}</td>
                <td>{this.email}</td>
                <td>{this.phoneno}</td>
                <td>{this.username}</td> */}
                <td>{list.item}</td>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.phoneno}</td>
                    <td>{list.username}</td>
                <td>
                <Link id="edit-link" to={"/edit-supply/" + list._id}>
                        Update
                    </Link>
                    <Button id="btndel" onClick= { event => window.confirm("Are you sure you want to delete?")
                      && this.deleteSupply(list._id)} size="vh" variant="danger">Delete</Button>  
                </td>
          
        </tbody>
        )}
      </Table>
      <button className="btn btn-success"><a href="/create-supply" style={{textDecoration:'none',color:'white'}}><i class="fas fa-users"></i>&nbsp;Add Supplier</a></button>

    </div>);
  }
}