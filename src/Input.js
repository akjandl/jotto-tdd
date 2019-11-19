import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions/index';

class Input extends Component {

  state = { currentGuess: '' };

  submitGuessedWord = (e) => {
    e.preventDefault();
    const guessWord = this.state.currentGuess;
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(this.state.currentGuess);
      this.setState({ currentGuess: '' });
    }
  };

  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="form-control mb-2 mx-sm-3"
            type="text"
            value={this.state.currentGuess}
            onChange={(e) => this.setState({ currentGuess: e.target.value })}
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this.submitGuessedWord}
          >
            Submit
          </button>
        </form>
      );
    return (
      <div data-test="component-input">
        { contents }
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    success: state.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    guessWord: (guessedWord) => dispatch(guessWord(guessedWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
export const UnconnectedInput = Input;
