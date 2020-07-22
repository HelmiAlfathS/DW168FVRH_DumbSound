import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Modal, Form} from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button'
import logo from '../assets/logo.svg'
import LoginForm from '../pages/login'


const Styles = styled.div`

  .navbar {
    background-color: black; 
  }
  .navbar-brand {
    color: white;
    position : absolute;
    left: calc(50% - 50px);
    top: 8px;
  }
  .navbar-nav{
    width: 100%;
  }
  a, .navbar-nav .nav-link {
    font-family: 'Product sans';
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    margin-right: 15px;

    &:hover {
      color: #E50914;
      text-decoration: none;
    }
  }
  .center{
    margin-top : 5px;
    margin-left: auto !important
  }
`;

const Logo = styled.img`
  width : 8rem;
  height: 3.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// const NavigationBar = () => 

class NavigationBar extends Component{
  constructor(props){
    super(props)
    this.state= {
      show : false,
      setShow : false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow () {
    this.setState(state =>({
      setShow : !state.setShow
    }))
  }
  
  handleClose() {
    this.setState(state =>({
      setShow : !state.setShow
    }))
  }

  render(){
    return(
      
        <Styles>
          <Navbar class="black" variant="dark" expand="lg">
            <Logo fixed="top" src={logo} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
              <Nav.Item>
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/series">TV Show</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/Movie">Movies</Link>
                  </Nav.Link>
                </Nav.Item>
                <div className="ml-auto center">
                  <Button> Register </Button>
                  <Button primary onClick={this.handleShow}>Login</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
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
            <Button primary onClick = {this.handleClose}> Log in </Button>
            <p> Don't have an account? click <span><Link to ="#">Here</Link></span></p>
          </Modal.Body>
        </Modal>
        <LoginForm /> 

      </Styles >
    )
  }

}




export default NavigationBar;