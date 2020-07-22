import React, { Component } from 'react';
import {
  Table,
  Dropdown,
  DropdownButton,
  Container,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import {
  getTransaction,
  updateTransaction,
} from '../../redux/actions/transactionAction';

import { connect } from 'react-redux';
import './table.css';
import moment from 'moment';

class TableTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getTransaction();
  }
  handleClick = async (id, idUser, status) => {
    this.props.updateTransaction(id, { UserId: idUser, status: status });
  };

  handleClick = (e) => {
    e.preventDefault();

    const { id, status } = e.target.dataset;
    console.log(id, status);

    if (id && status === 'approved') {
      this.props.updateTransaction({ status: 'approved' }, id);
      // this.props.getTransaction();
    } else if (id && status === 'cancel') {
      this.props.updateTransaction({ status: 'cancel' }, id);
      this.props.getTransaction();
    }
  };

  render() {
    const { transaction, loading } = this.props.transaction;
    // console.log(transaction);
    // console.log(transaction);
    // const mydata = transaction.map((item) => item);
    // console.log(mydata);
    // if (transaction === null || loading) {
    //   return null;
    // } else {
    //   const mydata = transaction.data.map((item) => item.User.fullName);
    //   // mydata.map((user) => console.log(user.fullName));

    //   console.log(mydata);
    // }

    let now = moment();

    let data;
    if (transaction === null || loading) {
      return <p>Fetching Data...</p>;
    } else {
      data = transaction.data.map((item, index) => {
        let due_Date = moment(item.dueDate);
        let start = index + 1;
        return (
          <tr className="transaction-table-data">
            <th scope="row">{start}</th>
            <td>{item.User.fullName}</td>
            <td>
              <a
                className="text-warning overflow-auto"
                target="_blank"
                rel="noopener noreferrer"
                href={`http://localhost:5000/api/v1/uploads/${item.attachement}`}
              >
                {item.attachement}
              </a>
            </td>
            <td>
              {due_Date.diff(now, 'day') > 0 ? due_Date.diff(now, 'day') : 0}{' '}
              Days
            </td>
            <td
              style={{
                color: item.status === 'approved' ? '#0ACF83' : '#FF0742',
              }}
            >
              {item.status === 'approved' ? 'Active' : 'Not Active'}
            </td>
            <td
              style={{
                color:
                  item.status === 'approved'
                    ? '#0ACF83'
                    : item.status === 'pending'
                    ? '#F7941E'
                    : '#FF0742',
              }}
            >
              {item.status}
            </td>
            <td>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  split
                  variant="secondary"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={this.handleClick}
                    data-id={item.id}
                    data-status={'approved'}
                  >
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={this.handleClick}
                    data-id={item.id}
                    data-status={'cancel'}
                  >
                    Cancel
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <Container className="mt-5 text-center">
          <Table striped bordered hover variant="dark">
            <thead class="text-head">
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
                <th>Action </th>
              </tr>
            </thead>

            {transaction === null || loading ? (
              <p>Fetching Data . . .</p>
            ) : (
              <tbody>{data}</tbody>
            )}
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    transaction: state.transactionReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTransaction: (status, id) => dispatch(updateTransaction(status, id)),
    getTransaction: () => dispatch(getTransaction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableTransaction);

// // const { data } = this.props.transaction;
// const x = Object.values(this.props.transaction.transaction);
// const y = Object.values(transaction);
// const myData = transaction.map((item, i) => {
//   const { email } = item.User;
//   return email;
// });
// console.log(myData);
// const datamap = y.map((item, index) => (
//   <>
//     <li key={item.id}>{item.User.id}</li>
//   </>
// ));
// // const user = this.props.auth.data;
// // console.log(user.id);
// const data = transaction.map((item, index) =>
// <>

// );
