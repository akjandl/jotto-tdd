import { actionTypes } from '../actions/index';


/**
 * @function secretWordReducer
 * @param {string} state - Current state of reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {object} - New state of reducer (secret word payload from action).
 */
const secretWordReducer = (state = 'water', action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;