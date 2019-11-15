import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Input from './Input';
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
    test('renders component without error', () => {});
    test('renders the input box', () => {});
    test('renders the submit button', () => {});
  });

  describe('word has been guessed', () => {});
    test('renders component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});

});

describe('update state', () => {});

