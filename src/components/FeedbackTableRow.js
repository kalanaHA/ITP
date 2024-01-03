import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class FeedbackTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteFeedback = this.deleteFeedback.bind(this);
    }

    deleteFeedback() {
        axios.delete('http://localhost:8070/feedbacks/delete-feedback/' + this.props.obj._id)
            .then((res) => {
                alert('Feedback successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.cid}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.user_type}</td>
                <td>{this.props.obj.contac_No}</td>
                <td>{this.props.obj.comment}</td>
                
                <td>
                    <Link className="edit-link" to={"/edit-feedback/" + this.props.obj._id} >
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteFeedback} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i>Delete</Button>
                </td>
            </tr>

        );
    }
}