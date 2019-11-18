import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './index';


describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall()
  });
  test('adds response word to state', async () => {
    // modified from course material to use async/await syntax
    const secretWord  = 'party';
    const store = storeFactory({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        stats: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});