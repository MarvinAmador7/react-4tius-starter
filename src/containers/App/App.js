/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWelcomeMessage } from '../../actions/welcome';
import { changeLang } from '../../actions/lang';
import { Translate } from 'react-redux-i18n';
import logo from '../../assets/logo.svg';
import './App.css';

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    actions : bindActionCreators({ fetchWelcomeMessage, changeLang }, dispatch),
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

  handleLangChange = (event) => {
    this.props.actions.changeLang(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <Translate value="application.message"/>
          </h2>

        </div>
        <p className="App-intro">
          {this.props.reducers.welcome.toJS().description}
        </p>
        <br/>
        <p>language : </p>
        <select name="lang" id="" onChange={this.handleLangChange}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
