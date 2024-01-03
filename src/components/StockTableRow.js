import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StockTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStock = this.deleteStock.bind(this);
    }

    deleteStock() {
        axios.delete('http://localhost:8070/stocks/delete-stock/' + this.props.obj._id)
            .then((res) => {
                alert('stock successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.stockid}</td>
                <td>{this.props.obj.itemcode}</td>
                <td>{this.props.obj.quntity}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.discount}</td>

                <td>
                    <Link className="edit-link" to={"/edit-stock/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStock} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}