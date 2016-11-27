/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWelcomeMessage } from '../../actions/welcome';

import logo from '../../assets/logo.svg';
import './App.css';

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    actions : bindActionCreators({ fetchWelcomeMessage }, dispatch),
  };
}

class App extends Component {

  static propTypes = {
    actions                       : React.PropTypes.object.isRequired,
    reducers                      : React.PropTypes.object.isRequired,
    'actions.fetchWelcomeMessage' : React.PropTypes.func,
  }

  componentDidMount () {
    this.props.actions.fetchWelcomeMessage();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.reducers.welcome.toJS().message}</h2>
        </div>
        <p className="App-intro">
          {this.props.reducers.welcome.toJS().description}
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
