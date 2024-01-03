import React, { Component } from 'react';

import axios from 'axios';


export default class SupplyTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteSupply = this.deleteSupply.bind(this);
    }

    deleteSupply() {
        axios.delete('http://localhost:8070/supplys/delete-supply/' + this.props.obj._id)
            .then((res) => {
                alert('successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.item}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phoneno}</td>
                <td>{this.props.obj.username}</td>
                
            </tr>

        );
    }
}