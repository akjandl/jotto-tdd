import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { UnconnectedApp } from './App';
import { storeFactory, findByTestAttr } from '../test/testUtils';


const setup = (state = {}) => {
  const store = storeFactory(state);
  return shallow(<App store={store} />).dive().dive();
};

describe('rending', () => {

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });

});

describe('redux props', () => {

  test('receives `guessedWords` store state as prop', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('receives `success` store state as prop', () => {
    const success = false;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('receives `secretWord` store state as prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('receives `getSecretWord` action creator as prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })

});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();

  // set up App component with getSecretWordMock as the getSecretWord prop
  const props = {
    getSecretWord: getSecretWordMock,
    guessedWords: [],
    success: false
  };
  const wrapper = shallow( <UnconnectedApp {...props} /> );

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
