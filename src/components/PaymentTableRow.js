import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class PaymentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deletePayment = this.deletePayment.bind(this);
    }

    deletePayment() {
        axios.delete('http://localhost:8070/payments/delete-payment/' + this.props.obj._id)
            .then((res) => {
                alert('Payment successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.card_number}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.holders_name}</td>
                <td>{this.props.obj.cvv}</td>
                <td>{this.props.obj.expiry_date}</td>
            
                <td>
                    <Link className="edit-link" to={"/edit-payment/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deletePayment} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}