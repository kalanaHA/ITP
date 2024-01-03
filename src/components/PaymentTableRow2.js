import React, { Component } from 'react';
import axios from 'axios';


export default class PaymentTableRow2 extends Component {

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
        
            </tr>

        );
    }
}