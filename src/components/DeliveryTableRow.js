import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class DeliveryTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteDelivery = this.deleteDelivery.bind(this);
    }

    deleteDelivery() {
        axios.delete('http://localhost:8070/deliverys/delete-delivery/' + this.props.obj._id)
            .then((res) => {
                alert('Delivery successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.Delivery_ID}</td>
                <td>{this.props.obj.Delivery_date}</td>
                <td>{this.props.obj.Quntity}</td>
                <td>{this.props.obj.Another_TP_No}</td>
                <td>{this.props.obj.Delivery_time}</td>
               
                
                <td>
                    <Link className="edit-link" to={"/edit-delivery/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteDelivery} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}