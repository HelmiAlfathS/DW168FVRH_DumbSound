import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button';
import { Link } from 'react-router-dom';
import jumbotron from '../assets/jumbotron.png';

const Styles = styled.div`
  .Hero {
    background: url(${jumbotron}) no-repeat center;
    background-size: center;
    height: 500px;
    position: relative;
    z-index: -2;
    margin-top: -68px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 50%;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      bottom: 0;
    }
  }
  .showcase-text {
    font-family: 'Product sans';
    margin-top: 80px;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    padding: 50px 0;
  }
  .info {
    margin-top: 40px;
  }
  .text-display {
    color: white;
    font-weight: 400;
  }
  .title {
    width: 480px;
    margin-bottom: 15px;
  }

  .transparant {
    background-color: rgba(0, 0, 0, 0);
    padding: 0 6px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
  }
`;

class Jumbotron extends React.Component {
  render() {
    // const { hero, heroText } = this.props;
    return (
      <Styles>
        <Jumbo fluid className="Hero">
          <Container className="text-display">
            <Row className="showcase-text">
              <Container>
                <h1 className="pb-3">
                  Connect on{' '}
                  <span className="text-warning font-weight-bold">DUMB</span>
                  SOUND
                </h1>
                <h3>
                  Discovert, Stream, and Share a constantly expanding mix of
                  music from emerging and major artist around the world.{' '}
                </h3>
                <div className="info">
                  <h4>
                    2019 <button className="transparant">DumbSound</button>
                  </h4>
                </div>
              </Container>
            </Row>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}
export default Jumbotron;
