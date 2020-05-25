import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import './assets/styles/App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import authCheck from './actions/authCheck';

class App extends Component {

  state = {
    loaded: false
  };

  async componentDidMount() {
    await this.props.authCheck();
    this.setState({
      loaded: true
    });
  }
  
  content() {
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {this.props.isAuthenticated ? Home : Login} />
            <Route path = '/auth/signup' component = {SignUp} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }

  render(){
    return(
      this.state.loaded ? this.content(): null
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheck: () => dispatch(authCheck())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
