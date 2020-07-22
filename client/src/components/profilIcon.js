import React, { Component } from 'react';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { Route, withRouter } from 'react-router-dom';
import './dropdown.css';
import styled from 'styled-components';

class Profilicon extends Component {
  handleLogout = () => {
    try {
      this.props.logout();
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { data, loading, error } = this.props.auth;

    // const role = this.props.dataUser.role;
    // console.log(this.props.dataUser);
    let token = false;
    if (localStorage.token) {
      token = true;
    }
    return (
      <Styles>
        <div className="">
          <DropdownButton
            alignRight
            title={
              <Image
                src="http://w3schools-fa.ir/howto/img_snow.jpg"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid white',
                }}
                fluid
              />
            }
            id="dropdown-menu-align-right"
            variant="secondary"
          >
            {/* <img src="http://w3schools-fa.ir/howto/img_snow.jpg" alt="Snow" style={{width: '100%'}}></img> */}
            <Dropdown.Menu>
              {data.role !== 1 ? (
                <>
                  <Dropdown.Item href="/payment">Pay</Dropdown.Item>
                  <Dropdown.Item href="/profil" className="botline">
                    Profil
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="/profil">Profil</Dropdown.Item> */}
                </>
              ) : (
                false
              )}

              {data.role === 1 ? (
                <>
                  <Dropdown.Item href="/songs">Add Music</Dropdown.Item>
                  <Dropdown.Item href="/artists">Add Artist</Dropdown.Item>
                  <Dropdown.Item href="/transaction" className="botline">
                    Transaction
                  </Dropdown.Item>
                  <Dropdown.Item href="/profil" className="botline">
                    Profil
                  </Dropdown.Item>
                </>
              ) : (
                false
              )}

              <Dropdown.Divider />
              <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownButton>
        </div>
      </Styles>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profilicon)
);

const Styles = styled.div`
  // * {
  //   margin-right: 100px;
  // }
  // .fixing {
  //   margin-right: -100px;
  // }
  .profile-info {
    display: flex;
  }
  .btn {
    width: 80px;
    position: absolute;
    right: 0px;
    z-index: 5;
    border: 0 solid red;
  }
  .btn:focus {
    border: 0 solid red;
  }

  .btn-secondary {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  .btn-secondary:focus {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    transform: scale(1);
  }

  .dropdown-menu {
    background-color: #1f1f1f;
    width: 10 px !important;
    position: absolute;
    top: 32px;
    padding: 1px;
    border: none;
    z-index: 2;
  }
  .dropdown-menu .show {
    // display: none;
  }

  .dropdown-item {
    color: #ee4622;
  }
  .user-navigation #dropdown-basic {
    background-color: red;
  }

  .profile-info img {
    width: 25px;
    object-fit: contain;
  }
  .user-navigation #dropdown-basic {
    background: red;
    border: none;
    padding: initial;
    width: 60px;
  }
  .user-navigation .dropdown-toggle {
    background-color: rgba(0, 0, 0, 0);
    border: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
  .photo-profile {
    width: 40px;
    border-radius: 100%;
    border: 2px solid #ee4622;
  }
  .dropdown .show {
    border-color: rgba(0, 0, 0, 0);
  }
  .user-navigation #dropdown-basic:focus,
  .user-navigation #dropdown-basic:hover,
  .user-navigation #dropdown-basic:active {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  .user-navigation .dropdown-menu {
    background-color: #1f1f1f !important;
    // border: 2px solid #1f1f1f;
    border-top: none;
  }

  .user-navigation .dropdown-item:focus {
    background-color: #1f1f1f !important;
  }
  .dropdown-toggle {
    background-color: rgba(0, 0, 0, 0) !important;
    border: rgba(0, 0, 0, 0) !important;
    border-color: rgba(0, 0, 0, 0) !important;
  }
`;
