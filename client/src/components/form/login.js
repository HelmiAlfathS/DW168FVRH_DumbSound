import React, { Component } from 'react';
import { Form, Modal, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login, clearError } from '../../redux/actions/authAction';
import Button from '../button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user: {},
    };
    // this.handleCLose = this.handleCLose.bind(this);
  }
  handleChangeInput = (e) => {
    this.props.clearError();
    const { user } = this.state;
    this.setState({
      user: { ...user, [e.target.name]: e.target.value },
    });
  };
  // handleCLose = () => this.setState({ show: false });
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.user);
    await this.props.login(this.state.user); //this state user itu body yg menyimpan data
    this.props.tutupModal();
    this.setState({
      user: {},
    });

    // this.setState({ user: {}, show: false });
    // const { isAuthenticated } = this.props;
    // if (this.state.show) {
    //   this.props.closeModal();
    // }if (condition1 ) => condition 2

    //masukan action login dari redux please this.props.login(data)
  };
  render() {
    const { data, loading, error, isAuthenticated, errorLogger } = this.props;
    const { show, user } = this.state;
    return (
      <>
        <Styles>
          <Modal show={this.props.show}>
            <Modal.Header
              closeButton
              onClick={this.props.closeModal}
            ></Modal.Header>

            <Modal.Body closeButton>
              <Container>
                <Modal.Title className="text-white mb-3 form-title">
                  Log in
                </Modal.Title>
                <Form onSubmit={this.handleSubmit} id="loginForm">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.handleChangeInput}
                      value={user.email ? user.email : ''}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChangeInput}
                      value={user.password ? user.password : ''}
                    />
                  </Form.Group>
                </Form>
                {errorLogger && (
                  <p className="text-center text-danger mb-0">
                    * Ups, {error.message} !
                  </p>
                )}
                <div type="submit" onClick={this.handleSubmit}>
                  <Button primary className="stretch">
                    {' '}
                    Log in{' '}
                  </Button>
                </div>

                <p className="text-white text-center">
                  {' '}
                  Don't have an account?
                  <span>
                    <Link to="#">Here</Link>
                  </span>
                </p>
              </Container>
            </Modal.Body>
          </Modal>
        </Styles>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    data,
    loading,
    error,
    isAuthenticated,
    errorLogger,
  } = state.authReducer; //namanya register krn ambil dari initial state register  di registerR reducer yg didalamnya juga ada login
  return {
    data,
    loading,
    error,
    isAuthenticated,
    errorLogger,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    login,
    clearError,
  })(LoginForm)
);
const Styles = styled.div``;
