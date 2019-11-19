import React from 'react';
import { shallow } from 'enzyme';

import GuessCounter from './GuessCounter';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { guessedWords: [] };
const setup = (props = defaultProps) => {
  return shallow(<GuessCounter  {...props} />);
};

describe('rendering', () => {

  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-guess-counter');
    expect(component.length).toBe(1);
  });
  test('no warning on render with expected props', () => {
    checkProps(GuessCounter, defaultProps);
  });
  test('no counter when no guessed words', () => {
    const wrapper = setup();
    const counter = findByTestAttr(wrapper, 'guess-counter');
    expect(counter.length).toBe(0);
  });
  test('render counter when guessed words', () => {
    const props = { guessedWords: [ {dummy: 'guess'} ]};
    const wrapper = setup(props);
    const counter = findByTestAttr(wrapper, 'guess-counter');
    expect(counter.text()).toContain('1');
  })
});