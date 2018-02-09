import search, { INITIAL_STATE } from './search';


it('should return the initial state', () => {
  expect(search(undefined, {})).toEqual(INITIAL_STATE);
});

it('should handle UPDATE_QUERY', () => {
  const action = {
    type: 'UPDATE_QUERY',
    query: 'text'
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    query: 'text'
  });
});

it('should handle UPDATE_STATUS', () => {
  const action = {
    type: 'UPDATE_STATUS',
    status: 'Done'
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    status: 'Done'
  });
});

it('should disable at SEARCH', () => {
  const action = {
    type: 'SEARCH',
    search: 'search'
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    disabled: true
  });
});

it('should handle UPDATE_WORDS', () => {
  const action = {
    type: 'UPDATE_WORDS',
    words: ['technology', 'innovation OR trash', 'test']
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    searchWords: [['technology'], ['innovation', 'trash'], ['test']]
  });
});

it('should handle REMOVE_WORD', () => {
  let oldState = { ...INITIAL_STATE };
  const action = {
    type: 'REMOVE_WORD',
    word: 'innovation'
  };

  expect(search(oldState, action)).toEqual({
    ...oldState,
    bannedWords: ['innovation']
  });

  oldState = { ...INITIAL_STATE, bannedWords: ['innovation'] };

  expect(search(oldState, action)).toEqual({
    ...oldState,
    bannedWords: []
  });

  oldState = { ...INITIAL_STATE, bannedWords: ['something', 'innovation', 'other'] };

  expect(search(oldState, action)).toEqual({
    ...oldState,
    bannedWords: ['something', 'other']
  });

});
