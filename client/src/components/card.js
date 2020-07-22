import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import Poster from './poster'

class MovieCard extends Component{
  render(){
    return(
      <Styles>
        <h3 className="category">TV Movies</h3>
        <div className="wrapper">
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
            <Link to="/movies">
            <div className="moviecard">
              <Poster src={card2}/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
        </div>
        <h3 className="category">TV Series</h3>
        <div className="wrapper">
            <Link to="/movies">
            <div className="moviecard">
              <img className="poster" src={card1} alt="ads"/>
              <h6 className="title">The Witcher</h6>
              <p className="year">2019</p>
            </div>
            </Link>
        </div>
      </Styles>
    )
  }
}
export default MovieCard;

const Styles = styled.div`
.wrapper{
  display: flex;
  // padding: 20px;
  margin: 5px 40px 30px;
  border: 2px solid blanchedalmond;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  .title, .year{
    font-family: 'Product sans';
    color: white; 
  }
  .category {
    font-family: 'Product sans';
    color: white;
    font-size:24px;
    margin-left: 10px;
    font-weight: bold;
  }

  .moviecard{
    width: 200px;
    background-color: none;
    margin: 5px;
    transition: all .2s ease;

    .poster{
      width: 100%;
      object-fit: cover;
      max-height: 300px;
    }
    .title{ 
      font-size: 18px;
      font-weight: bold;
      margin-top:5px;
    }
    .year{
      font-size: 14px;
    }
    &:hover{
      transform: scale(1.02);
      }
  }

  a{
    text-decoration: none;
  }
}
.category {
  font-family: 'Product sans';
  color: white;
  font-size:24px;
  margin-left: 30px;
  font-weight: bold;
  margin-bottom:20px;
}

@media (max-width:900px){
  .services{
    display: flex;
    flex-direction: column;
  }
}

`;