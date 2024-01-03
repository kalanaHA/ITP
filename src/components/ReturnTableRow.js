import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ReturnTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteReturn = this.deleteReturn.bind(this);
    }

    deleteReturn() {
        axios.delete('http://localhost:8070/returns/delete-return/' + this.props.obj._id)
            .then((res) => {
                alert('Subject successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.sname}</td>
                <td>{this.props.obj.scode}</td>
                <td>{this.props.obj.tname}</td>
                <td>{this.props.obj.class}</td>
                <td>{this.props.obj.language}</td>
                <td>
                    <Link className="edit-link" to={"/edit-return/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteReturn} size="vh" variant="outline-danger">
                    <i class="far fa-trash-alt"></i>  
                        Delete</Button>
                </td>
            </tr>

        );
    }
}