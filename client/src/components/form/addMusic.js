import React, { Component } from 'react';
import { Form, Row, Container, Col, Alert } from 'react-bootstrap';
import Button from '../button';
import './form.css';
import { connect } from 'react-redux';
import { addSong, getArtist } from '../../redux/actions/musicAction';

class AddMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      title: '',
      year: '',
      artistId: '',
      musicThumbnail: '',
      linkMusic: '',
    };
  }
  componentDidMount() {
    this.props.getArtist();
  }
  handleChangeInput = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    const { song } = this.state;
    this.setState({
      song: {
        ...song,
        [e.target.name]:
          e.target.type === 'file' ? e.target.files[0] : e.target.value,
      },
    });
  };

  //   handleChange = (event) => {
  //     const { dataAdd } = this.state;
  //     this.setState({
  //     dataAdd: { ...dataAdd, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value },
  //     });
  // };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addSong(this.state.song);
    this.setState({ song: {} });
    document.getElementById('formAddMusic').reset();

    // const dataMusic = {
    //   title: this.state.title,
    //   year: this.state.year,
    //   artistId: this.state.artistId,
    //   musicThumbnail: this.state.musicThumbnail,
    //   linkMusic: this.state.linkMusic,
    // };
    // console.log(dataMusic);
    // this.props.addSong(dataMusic);
  };

  render() {
    // data SINGER, ambil dari state Artist di music reducer []
    // const { artist } = this.props.music;
    // console.log(artist);
    // const singer = artist.map((singer) => singer.old);
    // console.log(singer);

    // data Singer, ambil dari state "Artist" di music rreuducer
    const x = Object.values(this.props.artist.artist);
    const musicArtist = x.map((data, index) => {
      return (
        <>
          <option value={data.id}>{data.name}</option>
        </>
      );
    });
    const { data, loading, error, song } = this.props.artist;
    return (
      <div>
        <Container className="mt-5">
          <h2 className="mb-5 text-white">Add Music</h2>
          <p className="text-center mt-2">
            {!error && !loading && song && Object.keys(song).length > 0 ? (
              <Alert
                style={{ backgroundColor: '#28a745' }}
                className="font-weight-bold text-white text-center"
              >
                New Song has been added successfully
              </Alert>
            ) : (
              false
            )}
          </p>
          <Form onSubmit={this.handleSubmit} id="formAddMusic">
            <Row>
              <Col md={9}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                {/* <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Singer"
                    name="musicThumbnail"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group> */}

                <Form.File id="formcheck-api-custom" custom className="mb-3">
                  <Form.File.Input
                    isValid
                    name="musicThumbnail"
                    onChange={this.handleChangeInput}
                  />
                  <Form.File.Label
                    data-browse="File"
                    className="text-white bg-dark border-white"
                    // name="attachement"
                    // onChange={this.handleChangeInput}
                  >
                    Thumbnail
                  </Form.File.Label>
                </Form.File>
                {/* <Form.File
                  id="formcheck-api-custom"
                  custom
                  name="thumbnailFilm"
                  onChange={this.handleChangeInput}
                >
                  <Form.File.Input
                    isValid
                    name="thumbnailFilm"
                    onChange={this.handleChangeInput}
                  />
                  <Form.File.Label data-browse="Icon">
                    Thumbnail
                  </Form.File.Label>
                </Form.File> */}
              </Col>
            </Row>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Year"
                name="year"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="artistId"
                as="select"
                onChange={this.handleChangeInput}
                placeholder="artist"
              >
                <option value="unknown" defaultValue>
                  Select artist
                </option>
                {musicArtist}
              </Form.Control>
            </Form.Group>

            {/* <Form.Group controlId="">
              <Form.Control as="text" placeholder="Singer" name="" />
                {/* <option>Action</option>
                <option>Drama</option>
                <option>Commedy</option>
                <option>4Romance</option>
                <option>Fight</option> */}
            {/* </Form.Control>
            </Form.Group> */}
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Music Link"
                    name="linkMusic"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                {/* <Form.File id="formcheck-api-custom" custom className="mb-3">
                  <Form.File.Input isValid />
                  <Form.File.Label data-browse="Icon">
                    Attach Some File
                  </Form.File.Label>
                </Form.File> */}
              </Col>
            </Row>
          </Form>
          <div
            className="mt-3"
            style={{ width: 100 }}
            onClick={this.handleSubmit}
          >
            <Button primary> Add Song </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.musicReducer,
    artist: state.musicReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addSong: (data) => dispatch(addSong(data)),
    getArtist: () => dispatch(getArtist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMusic);
