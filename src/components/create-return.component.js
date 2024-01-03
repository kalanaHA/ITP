import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './css/return.css'

export default class CreateReturn extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeReturnSname = this.onChangeReturnSname.bind(this);
    this.onChangeReturnScode = this.onChangeReturnScode.bind(this);
    this.onChangeReturnTname = this.onChangeReturnTname.bind(this);
    this.onChangeReturnClass = this.onChangeReturnClass.bind(this);
    this.onChangeReturnLanguage = this.onChangeReturnLanguage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      sname: '',
      scode:'',
      tname: '',
      class: '',
      language: ''

    }
  }

  onChangeReturnSname(e) {
    this.setState({ sname: e.target.value })
  }

  onChangeReturnScode(e) {
    this.setState({ scode: e.target.value })
  }

  onChangeReturnTname(e) {
    this.setState({ tname: e.target.value })
  }

  onChangeReturnClass(e) {
    this.setState({ class: e.target.value })
  }
  
  onChangeReturnLanguage(e) {
    this.setState({ language: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const returnObject = {
      sname: this.state.sname,
      scode: this.state.scode,
      tname: this.state.tname,
      class: this.state.class,
      language: this.state.language
    };
    axios.post('http://localhost:8070/returns/create-return', returnObject)
      .then(res => console.log(res.data));

    this.setState({ sname: '', scode: '', tname: '', class: '', language: '' })
    this.props.history.push('/return-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
         <br/><br/>
     
        &nbsp;&nbsp;<h2>ADD NEW SUBJECT</h2>

        <Form.Group controlId="Sname">
          <Form.Label>Subject Name</Form.Label>
          <Form.Control type="sname" value={this.state.sname} onChange={this.onChangeReturnSname}  required />
        </Form.Group>

        <Form.Group controlId="Scode">
          <Form.Label>Subject Code</Form.Label>
          <Form.Control type="scode" value={this.state.scode} onChange={this.onChangeReturnScode}  required />
        </Form.Group>

        <Form.Group controlId="Tname">
          <Form.Label>Teacher's Name</Form.Label>
          <Form.Control type="tname" value={this.state.tname} onChange={this.onChangeReturnTname}  required />
        </Form.Group>

        <Form.Group controlId="Class">
          <Form.Label>Class</Form.Label>
          <Form.Control type="class" style={{width: "370px"}} value={this.state.class} onChange={this.onChangeReturnClass}  required />
        </Form.Group>

        <Form.Group controlId="Language">
          <Form.Label>Language</Form.Label>
          <Form.Control type="language" style={{width: "370px"}} value={this.state.language} onChange={this.onChangeReturnLanguage}  required />
        </Form.Group>


        <br/>
        <Button variant="outline-success" size="lg" block="block" type="submit">
        <i class="fa fa-plus-square" aria-hidden="true"></i>&nbsp; ADD SUBJECT
        </Button>
        
      </Form>
    </div>);
  }
}