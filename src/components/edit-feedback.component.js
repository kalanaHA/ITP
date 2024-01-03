import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditFeedback extends Component {

  constructor(props) {
    super(props)

    this.onChangeFeedbackCid = this.onChangeFeedbackCid.bind(this);
    this.onChangeFeedbackName = this.onChangeFeedbackName.bind(this);
    this.onChangeFeedbackEmail = this.onChangeFeedbackEmail.bind(this);
    this.onChangeFeedbackUser_type = this.onChangeFeedbackUser_type.bind(this);
    this.onChangeFeedbackContac_No = this.onChangeFeedbackContac_No.bind(this);
    this.onChangeFeedbackComment = this.onChangeFeedbackComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      cid: '',
      name:'',
      email: '',
      user_type: '',
      contac_No: '',
      comment: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/feedbacks/edit-feedback/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          cid: res.data.cid,
          name: res.data.name,
          email: res.data.email,
          user_type: res.data.user_type,
          contac_No: res.data.contac_No,
          comment: res.data.comment
          
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      cid: this.state.cid,
      name: this.state.name,
      email: this.state.email,
      user_type: this.state.user_type,
      contac_No: this.state.contac_No,
      comment: this.state.comment
    
    };

    axios.put('http://localhost:8070/feedbacks/update-feedback/' + this.props.match.params.id, feedbackObject)
      .then((res) => {
        console.log(res.data)
        console.log('Feedback successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to feedback List 
    this.props.history.push('/feedback-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        &nbsp;&nbsp;<h3>Update Feedback</h3>    
      <Form.Group controlId="Cid">
          <Form.Label>Cid</Form.Label>
          <Form.Control type="text" value={this.state.cid} onChange={this.onChangeFeedbackCid} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeFeedbackName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeFeedbackEmail} />
        </Form.Group>

        <Form.Group controlId="User_type">
          <Form.Label>User-Type</Form.Label>
          <Form.Control type="text" value={this.state.user_type} onChange={this.onChangeFeedbackUser_type} />
        </Form.Group>

        <Form.Group controlId="Contac_No">
          <Form.Label>Contac-No</Form.Label>
          <Form.Control type="text" value={this.state.contac_No} onChange={this.onChangeFeedbackContac_No} />
        </Form.Group>

        <Form.Group controlId="Comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" value={this.state.comment} onChange={this.onChangeFeedbackComment} />
        </Form.Group>
        

        <br/>
        <Button variant="btn btn-success"  block="block" type="submit">
        <i class="far fa-comment-alt"></i>&nbsp;
          Update Details
        </Button>
      </Form>
    </div>);
  }
}