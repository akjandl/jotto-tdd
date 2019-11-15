import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';
import { findByTestAttr, checkProps } from '../test/testUtils';


const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
  ]
};

/**
 * Factory function to create ShallowWrapper for the GuessedWords component.
 * @function
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper} - Enzyme ShallowWrapper
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are now words guessed', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });

});

describe('if there are words guessed', () => {

});