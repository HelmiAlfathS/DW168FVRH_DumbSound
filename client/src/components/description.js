import React, { Component } from 'react';
import styled from 'styled-components';
import Poster from '../components/poster';
import card2 from '../assets/cards/card2.png';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';

// {props.title) {props.url} {props.} ntar dimapping di parent yaitu page detil, ini msh dummy
const Description = ({ title, deskripsi }) => {
  return (
    <Styles>
      <div className="wrapper">
        <div className="poster">
          <Poster src={card2} />
        </div>
        <div className="description">
          <h2>{title}</h2>
          <p>
            2019 <button className="transparant">TV Series</button>
          </p>
          <p>{deskripsi}</p>
        </div>

        <div className="videoplayer">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            // fluid={false}
            // width = {1070}
            // height = {530}
            // videoWidth= "16:9"
          />
        </div>

        {/* <div className="trailer">
            <ReactPlayer className="react-player"
              url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U'  // {props.url}
              false 
              controls
              />

          </div> */}
      </div>
    </Styles>
  );
};
export default Description;

const Styles = styled.div`
  .wrapper{
    display: grid;
    grid-template-columns: 0.4fr 0.7fr 0.8fr;
    grid-template-areas: 
      "poster deskripsi trailer";
    grid-gap: 5px;
    margin: 50px 30px;
    // height: 500px;
    // background-color: yellow;

    .poster{
      grid-area: poster;
      justify-self:center
    }
    .description{
      grid-area: deskripsi;
      // background-color: red;
      color: white;
      font-family: 'Product sans';
      text-align: justify;
      padding: 0 20px;

      h2{
        font-weight:bold;
        margin-bottom: 10px
      }
      .transparant{
        background-color : rgba(0,0,0,0);
        padding : 0 6px;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
        margin-right:20px; 
      }
    }
    // .trailer{
    //   grid-area: trailer;
    //   // background-color: blue;
    //   // justify-self:center;

    //   .react-player{
    //     width:100%
    //   }
    .videoplayer{
      grid-area:trailer;
      margin-top: 10px;
      width: 85%;
      
    }
    }
  }
  @media (max-width:900px){
    .wrapper{
      display: flex;
      flex-direction: column;
      justify-item: center;
    }
    .poster{
      display: none;
      margin: 10px auto 0;
    }
    .description{
      margin: 20px 0 40px;
    }
    .videoplayer{
      margin-left: 40px
    }

  }

`;
