import React, { Component } from 'react';
import TableTransaction from '../components/form/tableTransaction';

class DetailTransaction extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <TableTransaction />
      </div>
    );
  }
}

export default DetailTransaction;
