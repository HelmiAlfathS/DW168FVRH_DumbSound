import React, { Component, Fragment } from 'react';
import Jumbotron from '../components/hero';
import CardMovie from '../components/cardMovie';
import { login } from '../redux/actions/authAction';
import { getMusic } from '../redux/actions/musicAction';
// import { getArtist } from '../redux/actions/artistAction';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import '../components/form/musicPlayer.css';
import songCard from '../assets/songCard.png';

// disini kita akan emngget film

class Home3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 0,
      myIndex: 0,
    };
  }
  componentDidMount() {
    this.props.getMusic();
  }

  render() {
    const { music, loading } = this.props.music;
    const { data: dataUser, isLogin } = this.props.auth;
    console.log(dataUser.data);

    //ambil Singer dari state "data" dimuscic reducer? loading needed
    let myPlaylist = [];
    let data;
    console.log(myPlaylist);

    if (music === null || loading) {
      return null;
    } else {
      data = music.data.map((song, index) => {
        return (
          <>
            <div className="moviecard" key={song.id}>
              {isLogin && dataUser.subscribe === true ? (
                <img
                  className="poster"
                  src={`http://localhost:5000/api/v1/uploads/${song.musicThumbnail}`}
                  alt="ads"
                  onClick={() => this.setState({ myIndex: index })}
                  onMouseOver={() => console.log(index)}
                />
              ) : (
                <img
                  className="poster"
                  src={`http://localhost:5000/api/v1/uploads/${song.musicThumbnail}`}
                  alt="ads"
                  onClick={() => (
                    <>
                      <Alert
                        style={{ backgroundColor: '#28a745' }}
                        className="font-weight-bold text-white text-center"
                      >
                        need Login
                      </Alert>{' '}
                    </>
                  )}
                  onMouseOver={() => console.log(index)}
                />
              )}
              <div className="flat">
                <h6 className="title">{song.title}</h6>
                <p className="singer righted">{song.year}</p>
              </div>
              <p className="singer"> {song.Artist.name} </p>
            </div>
          </>
        );
      });
    }

    return (
      <Styles>
        <Fragment>
          <Jumbotron />
          <h2 className="text-center mt-4  mb-4 " style={{ color: '#EE4622' }}>
            Dengarkan dan Rasakan{' '}
          </h2>
          <Container>
            <div className="wrapper">{data} </div>
            {isLogin && dataUser.subscribe === true ? (
              <ReactJkMusicPlayer
                mode="full"
                getAudioInstance={(instance) => (this.audioInstance = instance)}
                audioLists={music.data.map((music, index) => ({
                  name: music.title,
                  singer: music.Artist.name,
                  cover: music.thumbnailMusic,
                  musicSrc: music.linkMusic,
                }))}
                defaultPlayIndex={this.state.initial}
                autoPlay={false}
                showDownload={false}
                showThemeSwitch={false}
                toggleMode={false}
                responsive={false}
                glassBg={true}
                playIndex={this.state.myIndex} //
                // onAudioPlay={myPlaylist}
              />
            ) : (
              false
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home3);

const Styles = styled.div`
  .category {
    margin-bottom: 20px;
    color: white;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    // padding: 20px;
    margin: 5px 0px 30px;
    // border: 2px solid blanchedalmond;
    align-items: center;
    flex-wrap: wrap;
    // justify-content: space-between;}

    .title,
    .year {
      font-family: 'Product sans';
      color: white;
    }
    .flat {
      display: flex;
      justify-content: space-between;
      margin: 0 7px;
    }
    .righted {
      margin-top: 5px;
      margin-right: 5px;
      font-weight: bold;
    }
    .moviecard {
      width: 200px;
      background-color: none;
      margin: 5px;
      transition: all 0.2s ease;
      border: 2px solid grey;
      border-radius: 10px;
      margin-bottom: 20px;

      .title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
      }
      .singer {
        font-size: 14px;
        margin-left: 7px;
      }
      &:hover {
        transform: scale(1.02);
        background-color: #ee4622;
        opacity: 0.5;
      }
    }

    .poster {
      width: 100%;
      object-fit: cover;
      max-height: 150px;
      border-radius: 10px;
      margin-bottom: 10px;
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
