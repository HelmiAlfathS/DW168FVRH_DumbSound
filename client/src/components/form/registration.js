import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/authAction';
import { Form, Modal, Container } from 'react-bootstrap';
import Button from '../button';
import { Link } from 'react-router-dom';
import './form.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      fullName: '',
      email: '',
      password: '',
      gender: 'male',
      phone: '',
      address: '',
    };
  }
  handleChangeInput = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
    };
    console.log(data);
    await this.props.register(data);
    // this.setState({ data: [] });
    this.props.tutupModal();
  };
  render() {
    const { data } = this.props.register;
    const { show } = this.state;
    return (
      <>
        <div>
          <Modal show={this.props.showregister}>
            <Modal.Header closeButton onClick={this.props.closeModal}>
              <Modal.Title className="text-white">Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Modal.Title className="text-white mb-3 form-title">
                  Register
                </Modal.Title>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      name="fullname"
                      onChange={this.handleChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.handleChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChangeInput}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="gender"
                      as="select"
                      onChange={this.handleChangeInput}
                      placeholder="Gender"
                    >
                      <option value="male" defaultValue>
                        Male
                      </option>
                      <option value="female">Female</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      onChange={this.handleChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      as="textarea"
                      row="3"
                      placeholder="Adress"
                      name="address"
                      onChange={this.handleChangeInput}
                    />
                  </Form.Group>
                </Form>

                <div type="submit" onClick={this.handleSubmit}>
                  <Button> Register </Button>
                </div>

                <p className="text-white text-center">
                  {' '}
                  Already have an Account ? Click{' '}
                  <span>
                    <Link to="#">Here</Link>
                  </span>
                </p>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    registerR: state.registerR,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(register(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(RegistrationForm);
