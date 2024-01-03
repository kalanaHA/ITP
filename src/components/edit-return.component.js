import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditReturn extends Component {

  constructor(props) {
    super(props)

    this.onChangeReturnSname = this.onChangeReturnSname.bind(this);
    this.onChangeReturnScode = this.onChangeReturnScode.bind(this);
    this.onChangeReturnTname = this.onChangeReturnTname.bind(this);
    this.onChangeReturnClass = this.onChangeReturnClass.bind(this);
    this.onChangeReturnLanguage = this.onChangeReturnLanguage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      sname: '',
      scode:'',
      tname: '',
      class: '',
      language: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/returns/edit-return/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          date: res.data.date,
          time: res.data.time,
          quntity: res.data.quntity,
          reason: res.data.reason
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:8070/returns/update-return/' + this.props.match.params.id, returnObject)
      .then((res) => {
        console.log(res.data)
        console.log('Subject successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to return List 
    this.props.history.push('/return-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <br/><br/>
        &nbsp;<h1>STUDENT MANAGEMENT</h1><br/>
        &nbsp;&nbsp;<h3>Update Details</h3>
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
        <Button variant="outline-danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}