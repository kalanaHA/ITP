import React, { Component } from 'react';
import axios from 'axios';

export default class ReturnTableRow2 extends Component {

    constructor(props) {
        super(props);
        this.deleteReturn = this.deleteReturn.bind(this);
    }

    deleteReturn() {
        axios.delete('http://localhost:8070/returns/delete-return/' + this.props.obj._id)
            .then((res) => {
                alert('subject successfully deleted!')
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
               
            </tr>

        );
    }
}