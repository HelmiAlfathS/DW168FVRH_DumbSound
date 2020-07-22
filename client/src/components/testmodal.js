import React, {Component} from 'react'
import {Form, Modal} from 'react-bootstrap';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/button'



class LoginForm extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <div>
        <Modal show={this.props.show} onHide= {this.props.onHide}>
          <Modal.Header closeButton onClick={this.props.onHide}>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <Button primary onClick={this.props.onHide}> Log in </Button>
            <p> Don't have an account? click <span><Link to ="#">Here</Link></span></p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
export default LoginForm;
