import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button';
import {
  register,
  login,
  logout,
  clearError,
} from '../redux/actions/authAction';
import LoginForm from './form/login';
import RegistrationForm from './form/registration';
import { Route, withRouter } from 'react-router-dom';
import Profilicon from './profilIcon';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showregister: false,
      isToggleOn: true,
      dataUser: {},
    };

    this.popUpModalLogin = this.popUpModalLogin.bind(this);
    this.popUpModalregister = this.popUpModalregister.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Method
  closeModal() {
    this.setState((state) => ({
      showlogin: false,
      showregister: false,
    }));
    this.props.clearError();
  }
  popUpModalLogin() {
    this.setState((state) => ({
      showlogin: true,
    }));
  }

  popUpModalregister() {
    this.setState((state) => ({
      showregister: true,
    }));
  }
  tutupModal = () => {
    this.setState({
      showlogin: false,
      showregister: false,
    });
    this.props.clearError();
  };
  ////////////////////////////////// CEKKKKKKK
  handleLogout = () => {
    try {
      this.props.logout();
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data, loading, error, isLogin, isAuthenticated } = this.props.auth;
    const { dataUser } = this.state;

    const guest = (
      <Fragment>
        <div onClick={this.popUpModalregister}>
          <Button> Register </Button>
        </div>
        <div onClick={this.popUpModalLogin}>
          <Button primary>Login</Button>
        </div>
      </Fragment>
    );
    const userloged = (
      <Fragment>
        <Profilicon />
      </Fragment>
    ); // buat lebih dinamis dong , jngan usera daong //simpan dispatch logoit
    let token = false;
    if (localStorage.token) {
      token = true;
    }
    // sampai saat ini kita udah bikin jika ada token di local storage, maka tombol login nya hilang

    return (
      <Styles>
        <Navbar className="black" variant="dark" expand="lg">
          <Navbar.Brand href="/" className="mt-1">
            <span className="text-warning font-weight-bold">DUMB</span>
            SOUND
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              {/* <Nav.Item>
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
              </Nav.Item> */}
              <div className="center">{token ? userloged : guest}</div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Modal callback */}
        <LoginForm
          show={this.state.showlogin}
          // openModal={this.popUpModalLogin}
          closeModal={this.closeModal}
          tutupModal={this.tutupModal}
        />
        <RegistrationForm
          showregister={this.state.showregister}
          openModalregister={this.popUpModalregister}
          closeModal={this.closeModal}
          tutupModal={this.tutupModal}
        />
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { register, login, logout, clearError })(
    NavigationBar
  )
);

const Styles = styled.div`
  .navbar {
    background-color: rgba(70, 65, 65, 0);
  }

  .navbar-brand {
    color: white;
    position: absolute;
    left: calc(50% - 50px);
    top: 8px;
  }

  .navbar-nav {
    width: 100%;
  }

  a,
  .navbar-nav .nav-link {
    font-family: 'Product sans';
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 15px;

    &:hover {
      color: #e50914;
      text-decoration: none;
    }
  }

  .center {
    display: flex;
    margin-top: 5px;
    margin-left: auto !important;
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    .center {
      display: block;
      margin: 0 auto;
      width: 100%;

      Button {
        margin: 5px;
        width: 100%;
      }
    }
  }
`;

const Logo = styled.img`
  width: 8rem;
  height: 3.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
