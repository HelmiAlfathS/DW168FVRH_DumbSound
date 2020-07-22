import React, { Fragment } from 'react';
import Home from './pages/home';
import AddSong from './pages/addSong';
import AddArtist from './pages/addArtist';
import Home3 from './pages/home3';
import Profil from './pages/profil';
import Transaksi from './pages/transaksi';
import GlobalStyle from './components/global';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import DetailTransaction from './pages/detailTransaction';
import { connect } from 'react-redux';
import { login, register } from './redux/actions/authAction';

class App extends React.Component {
  render() {
    const { data: dataUser, isAuthenticated } = this.props.auth;
    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          dataUser.role === 1 ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          dataUser.role === 0 ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
    console.log(dataUser);
    return (
      <Fragment>
        <GlobalStyle />
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home3} />
            <PrivateRouteAdmin exact path="/songs" component={AddSong} />
            <PrivateRouteAdmin exact path="/artists" component={AddArtist} />
            <Route exact path="/profil" component={Profil} />
            <PrivateRouteUser exact path="/payment" component={Transaksi} />
            <PrivateRouteAdmin
              exact
              path="/transaction"
              component={DetailTransaction}
            />
            <Route exact path="/home2" component={Home} />
          </Switch>

          {/* <Jumbotron /> */}
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { login, register })(App);
