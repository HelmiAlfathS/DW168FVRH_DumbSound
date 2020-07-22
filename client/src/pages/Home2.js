import React, { Component, Fragment } from 'react';
import Jumbotron from '../components/hero';
import CardMovie from '../components/cardMovie';
import { login } from '../redux/actions/authAction';
import { getMusic } from '../redux/actions/musicAction';
// import { getArtist } from '../redux/actions/artistAction';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import '../components/form/musicPlayer.css';

// disini kita akan emngget film

class Home2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playIndex: 0,
    };
  }
  componentDidMount() {
    this.props.getMusic();
  }

  rubahIndex = (index) => {
    this.setState({
      playIndex: index,
    });
  };
  render() {
    const { music, loading } = this.props.music;

    //ambil Singer dari state "data" dimuscic reducer? loading needed
    let data;
    if (music === null || loading) {
      return null;
    } else {
      data = music.data.map((song, index) => {
        const playlist = {
          name: song.title,
          singer: song.Artist.name,
          cover: `http://localhost:5000/uploads/${song.thumbnail}`,
          musicSrc: song.linkMusic,
        };
        return (
          <>
            <CardMovie
              key={index}
              id={song.id}
              imgUrl={`http://localhost:5000/api/v1/uploads/${song.musicThumbnail}`}
              title={song.title}
              singer={song.Artist.name}
              year={song.year}
              onClick={this.rubahIndex(index)}
            />
            <ReactJkMusicPlayer
              mode="full"
              audioLists={this.playlist} //
              defaultPlayIndex={0}
              autoPlay={false}
              showDownload={false}
              showThemeSwitch={false}
              toggleMode={false}
              responsive={false}
              glassBg={true}
              playIndex={this.state.playIndex} //
            />
          </>
        );
      });
    }

    return (
      <Styles>
        <Fragment>
          <Jumbotron />

          <Container>
            <div className="wrapper">{data} </div>
          </Container>
        </Fragment>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.musicReducer,
    // artist: state.artistReducer,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getArtist: () => dispatch(getArtist()),
    getMusic: () => dispatch(getMusic()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home2);

const Styles = styled.div`
.category { 
  margin-bottom : 20px;
  color: white
}
.wrapper{
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
  // padding: 20px;
  margin: 5px 0px 30px;
  // border: 2px solid blanchedalmond;
  align-items: center;
  flex-wrap: wrap;
  // justify-content: space-between;`;
