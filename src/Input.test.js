import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Input from './Input';
import { UnconnectedInput } from './Input';
import { storeFactory } from '../test/testUtils';


/**
 * Factory function create ShallowWrapper of Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive().dive();
};

describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });

});

describe('redux props', () => {

  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });
  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function)
  });
});

describe('`guessWord` action creator call', () => {
  let mockGetWord;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    mockGetWord = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={mockGetWord} />);
    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });
    // find submit button and simulate click
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault: () => {} });
  });

  test('calls `guessWord` on submit button click', () => {
    const mockGetWordCallCount = mockGetWord.mock.calls.length;
    expect(mockGetWordCallCount).toBe(1);
  });
  test('calls `guessWord` with input state value as argument', () => {
    const mockGuessWordCalls = mockGetWord.mock.calls;
    const guessWordArgs = mockGuessWordCalls[0];
    expect(guessWordArgs[0]).toBe(guessedWord);
  });
  test('input box clears on submit', () => {
    const inputStateValue = wrapper.state('currentGuess');
    expect(inputStateValue).toBe('');
  });

});

