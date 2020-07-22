import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import songCard from '../assets/songCard.png';
import Poster from './poster';
import { Route, withRouter } from 'react-router-dom';

class CardMovie extends Component {
  render() {
    const { title, singer, id, year } = this.props;

    return (
      <Styles>
        {/* <Link to="`/datail/${id}`"> */}
        <div className="moviecard" key={id}>
          <img
            className="poster"
            src={songCard}
            alt="ads"
            onClick={this.props.rubahIndex}
            // onClick={() => this.props.history.push(`/detail/${id}`)}
          />
          <div className="flat">
            <h6 className="title">{title}</h6>
            <p className="singer righted">{year}</p>
          </div>
          <p className="singer"> {singer} </p>
        </div>
        {/* </Link> */}
      </Styles>
    );
  }
}
export default withRouter(CardMovie);

const Styles = styled.div`

    .title,
    .year {
      font-family: 'Product sans';
      color: white;
    }
    .flat{
      display: flex;
      justify-content: space-between
    }
    .righted{
      margin-top: 5px;
      margin-right: 5px;
      font-weight: bold
    }
    .moviecard {
      width: 200px;
      background-color: none;
      margin: 5px;
      transition: all 0.2s ease;

      .poster {
        width: 100%;
        object-fit: cover;
        max-height: 100px;
        border-size: 10px
      }
      .title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
      }
      .singer {
        font-size: 14px;
      }
      &:hover {
        transform: scale(1.02);
      }
    }

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 900px) {
    .services {
      display: flex;
      flex-direction: column;
    }
  }
`;
