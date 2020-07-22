import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Player } from 'video-react';
import { getFilm } from '../redux/actions/fimAction';

function MediaPlayer(props) {
  return (
    <Styles>
      <Jumbotron fluid className="showcaseplayer">
        <div className="videoplayer">
          <Player
            playsInline
            poster="{/assets/poster.png}"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            // fluid={false}
            // width = {1070}
            // height = {530}
            // videoWidth= "16:9"
          />
        </div>
      </Jumbotron>
    </Styles>
  );
}

export default MediaPlayer;

// function MediaPlayer (props){
//   return(
//     <Styles >
//       <Jumbotron fluid>
//         {/* <Container> */}
//           <ReactPlayer className="react-player"
//                 url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U'  // {props.url}
//                 false
//                 controls
//                  />

//         {/* </Container> */}
//       </Jumbotron>
//     </Styles>
//   )
// }
// export default MediaPlayer;

const Styles = styled.div`
  .showcaseplayer{
    height: 537px;
    background-color:rgba(31, 31, 31, 0.3);

  }

  .videoplayer{
    margin:0px auto;
    // height: 430px;
    width: 952px;
    margin-top: -64px;
    // border: 2px solid red;
  }
  .
`;
// BROO, utk react-video ada masukan script di scss, dan link di public index.js
