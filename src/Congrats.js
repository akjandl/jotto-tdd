import React from 'react';
import PropTypes from 'prop-types';


/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
const congrats = (props) => {
    if (props.success) {
      return (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      )
    }
    return (
      <div data-test="component-congrats" />
    )
};

congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default congrats;