import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateFeedback extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeFeedbackCid = this.onChangeFeedbackCid.bind(this);
    this.onChangeFeedbackName = this.onChangeFeedbackName.bind(this);
    this.onChangeFeedbackEmail = this.onChangeFeedbackEmail.bind(this);
    this.onChangeFeedbackUser_type = this.onChangeFeedbackUser_type.bind(this);
    this.onChangeFeedbackContac_No = this.onChangeFeedbackContac_No.bind(this);
    this.onChangeFeedbackComment = this.onChangeFeedbackComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      cid: '',
      name:'',
      email: '',
      user_type: '',
      contac_No: '',
      comment: ''
    }
  }

  onChangeFeedbackCid(e) {
    this.setState({ cid: e.target.value })
  }

  onChangeFeedbackName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeFeedbackEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeFeedbackUser_type(e) {
    this.setState({ user_type: e.target.value })
  }
  
  onChangeFeedbackContac_No(e) {
    this.setState({ contac_No: e.target.value })
  }

  onChangeFeedbackComment(e) {
    this.setState({ comment: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const feedbackObject = {
      cid:this.state.cid,
      name:this.state.name,
      email:this.state.email,
      user_type:this.state.user_type,
      contac_No:this.state.contac_No,
      comment:this.state.comment
      
    };
    axios.post('http://localhost:8070/feedbacks/create-feedback', feedbackObject)
      .then(res => console.log(res.data));

    this.setState({ cid: '', name: '', email: '', user_type: '', contac_No: '', comment: '' })
    this.props.history.push('/feedback-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        
<br>
</br>
<br>
</br>
        &nbsp;&nbsp;<h3>ADD FEEDBACK</h3>
        <Form.Group controlId="Cid">
          <Form.Label>Cid</Form.Label>
          <Form.Control type="text"  value={this.state.cid} onChange={this.onChangeFeedbackCid} required />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeFeedbackName}  required  />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeFeedbackEmail}  required />
        </Form.Group>

        <Form.Group controlId="User_type">
          <Form.Label>User-Type (Customer OR viwer)</Form.Label>
          <Form.Control type="text" value={this.state.user_type} onChange={this.onChangeFeedbackUser_type}  required />
        </Form.Group>

        <Form.Group controlId="Contac_No">
          <Form.Label>Contac-No</Form.Label>
          <Form.Control type="number" value={this.state.contac_No} onChange={this.onChangeFeedbackContac_No}  required />
        </Form.Group>

        <Form.Group controlId="Comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" value={this.state.comment} onChange={this.onChangeFeedbackComment}  required />
        </Form.Group>
         
        <br/>
        <Button variant="btn btn-success" block="block" type="submit">
        <i class="far fa-comment-alt"></i>&nbsp; Add Feedback
        </Button>
      
        </Form>
    </div>);
  }
}