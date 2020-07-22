import React, { Component } from 'react';
import { Form, Row, Container, Col, Alert } from 'react-bootstrap';
import Button from '../button';
import './form.css';
import { addArtist, getCategory } from '../../redux/actions/artistAction';
import { connect } from 'react-redux';
import MusicPlayer from './musicPlayer';

class AddArtistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      name: '',
      old: '',
      categoryId: '',
      carrerStart: '',
    };
  }
  componentDidMount() {
    this.props.getCategory();
  }
  handleChangeInput = (e) => {
    // console.log(e.target.name + ' : ' + e.target.value);
    const { artist } = this.state;
    this.setState({
      artist: { ...artist, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addArtist(this.state.artist);

    // const dataArtist = {
    //   name: this.state.name,
    //   old: this.state.old,
    //   categoryId: this.state.categoryId,
    //   carrerStart: this.state.carrerStart,
    // };
    // console.log(dataArtist);
    // this.props.addArtist(dataArtist);
    document.getElementById('formAddArtist').reset();

    this.setState({ artist: {} });
  };

  render() {
    const { data, loading, error, artist } = this.props.artist;
    const x = Object.values(this.props.category.data);
    const artistCategory = x.map((data, index) => {
      return (
        <>
          <option value={data.id}>{data.category}</option>
        </>
      );
    });

    return (
      <div>
        <Container>
          <h2 className="text-white mt-5 mb-5">Add Artist </h2>
          <p className="text-center mt-2">
            {!error && !loading && artist && Object.keys(artist).length > 0 ? (
              <Alert
                style={{ backgroundColor: '#28a745' }}
                className="font-weight-bold text-white text-center"
              >
                Artist has been saved successfully
              </Alert>
            ) : (
              false
            )}
          </p>

          <Form id="formAddArtist">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Old"
                name="old"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="categoryId"
                as="select"
                onChange={this.handleChangeInput}
                placeholder="category"
              >
                <option value="1" defaultValue>
                  Select Category
                </option>
                {artistCategory}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Start a Career"
                name="carrerStart"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
          </Form>
          <div onClick={this.handleSubmit} className="mt-4">
            <Button primary className="stretch">
              {' '}
              Add Artist{' '}
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artistReducer,
    category: state.artistReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addArtist: (data) => dispatch(addArtist(data)),
    getCategory: () => dispatch(getCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArtistForm);
