import React from 'react';
import PropTypes from 'prop-types';


const guessCounter = (props) => {

  const guessCount = props.guessedWords.length;
  let counter = null;
  if (guessCount > 0) {
    counter = (
      <h5 data-test="guess-counter">
        Total Guesses: {props.guessedWords.length}
      </h5>
    )
  }

  return (
    <div data-test="component-guess-counter">
      { counter }
    </div>
  );

};

guessCounter.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default guessCounter;