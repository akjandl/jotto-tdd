import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions/index';

class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    secretWord: state.secretWord,
    success: state.success,
    guessedWords: state.guessedWords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSecretWord: () => dispatch(getSecretWord()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
