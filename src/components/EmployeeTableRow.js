import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        axios.delete('http://localhost:8070/employees/delete-employee/' + this.props.obj._id)
            .then((res) => {
                alert('Employee successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.contact_number}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.nic}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.date_of_join}</td>
                <td>
                    <Link className="edit-link" to={"/edit-employee/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteEmployee} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}