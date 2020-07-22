import React, { Component } from 'react';
import navigationBar from '../components/navigationBar';
import Jumbotron from '../components/hero';
import AddMusic from '../components/form/addMusic';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
