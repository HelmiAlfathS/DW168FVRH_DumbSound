import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { oneTransaction } from '../redux/actions/transactionAction';
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaTicketAlt,
  FaSearchLocation,
  FaTransgender,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Col } from 'react-bootstrap';
import profil from '../assets/profil.png';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.oneTransaction(this.props.auth.data.id);
  }

  render() {
    const { data: dataUser } = this.props.auth;
    console.log(dataUser); //dataUSer sudah objek gaperlu pake data
    const { one } = this.props.transaction;
    console.log(one);

    console.log(one);

    return (
      <IconContext.Provider
        value={{
          color: '#ee4622',
          size: '34px',
          style: { marginRight: '30px', marginTop: '3px' },
        }}
      >
        <Styles>
          <div class="wrapper">
            <div class="row">
              <Col md={7}>
                <div class="biodata">
                  <h3 class="biodata-title">Personal Info </h3>
                  <ul>
                    <li className="data-user-bundle">
                      <FaUserCircle />
                      <div class="profil-data">
                        <p class="data-user">{dataUser.fullName}</p>
                        <p class="data-label">Full Name</p>
                      </div>
                    </li>
                    <li className="data-user-bundle">
                      <FaEnvelope />
                      <div class="profil-data">
                        <p class="data-user">{dataUser.email}</p>
                        <p class="data-label">Email</p>
                      </div>
                    </li>
                    <li className="data-user-bundle">
                      <FaTicketAlt />
                      <div class="profil-data">
                        <p class="data-user">
                          {dataUser.subscribe ? 'Active' : 'Not Active'}
                        </p>
                        <p class="data-label">Status</p>
                      </div>
                    </li>
                    <li className="data-user-bundle">
                      <FaTransgender />
                      <div class="profil-data">
                        <p class="data-user">{dataUser.gender}</p>
                        <p class="data-label">Gender</p>
                      </div>
                    </li>
                    <li className="data-user-bundle">
                      <FaPhone />
                      <div class="profil-data">
                        <p class="data-user">{dataUser.phone}</p>
                        <p class="data-label">Mobile Phone</p>
                      </div>
                    </li>
                    <li className="data-user-bundle">
                      <FaSearchLocation />
                      <div class="profil-data">
                        <p class="data-user">{dataUser.address}</p>
                        <p class="data-label">Adress</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={5}>
                <div class="profil">
                  <img className="photo-profil" src={profil} alt="ada" />
                  <button class="profil-button">Change Photo profil</button>
                </div>
              </Col>
            </div>
          </div>
        </Styles>
      </IconContext.Provider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    transaction: state.transactionReducer,
  };
};
export default connect(mapStateToProps, { login, oneTransaction })(Profil);

const Styles = styled.div`
  .wrapper {
    width: 785px;
    height: 490px;
    background-color: #1f1f1f;
    padding: 30px;
    margin: 50px auto;
    border-radius: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  .profil {
    padding: 10px;
  }
  .profil-photo {
    width: 280px;
    height: 345px;
  }
  .profil-button {
    display: block;
    border: none;
    outline: none;
    width: 280px;
    height: 50px;
    background-color: #ee4622;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    transition: 0.2s;
    margin-top: 10px;
  }

  .biodata .biodata-title {
    font-weight: bold;
    color: white;
    margin-bottom: 20px
  }
  // .biodata ${FaUserCircle} {
  //   font-size: 23px;
  //   color: #ee4622;
  //   border-radius: 50%;
  //   margin-right: 20px;
  //   transition: 0.2s;
  //   line-height: 40px;
  // }
  .biodata li {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .biodata p {
    margin: 0px;
  }
  .biodata .data-user {
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }
  .biodata .data-label {
    font-size: 12px;
    color: #8A8C90;
  }
`;
