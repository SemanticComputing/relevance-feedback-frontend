import search from './search';

const INITIAL_STATE = {
  query: '',
  status: '',
  disabled: false,
  searchWords: [],
  results: {}
};


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

it('should disable if status is not done', () => {
  const action = {
    type: 'UPDATE_STATUS',
    status: 'working'
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    disabled: true,
    status: 'working'
  });
});

it('should handle UPDATE_RESULTS', () => {
  const results = {
    result_id: 'resultId',
    items: [
      {
        name: 'title',
        url: 'http://example.fi',
        description: 'description'
      },
      {
        name: 'other title',
        url: 'http://another.fi',
        description: 'other description'
      },
    ]
  };

  const action = {
    type: 'UPDATE_RESULTS',
    results
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    results
  });
});

it('should handle UPDATE_THUMB', () => {
  const result = {
    name: 'title',
    url: 'http://example.fi',
    description: 'description'
  };
  const otherResult = {
    name: 'other title',
    url: 'http://another.fi',
    description: 'other description'
  };
  const results = {
    result_id: 'resultId',
    items: [
      result,
      otherResult
    ]
  };
  const action = {
    type: 'UPDATE_THUMB',
    thumb: {
      result,
      value: true
    }
  };
  const expectedResult = { ...result, thumb: true };
  const expectedResults = { ...results, items: [expectedResult, otherResult] };

  expect(search({ results }, action)).toEqual({ results: expectedResults });
});

it('should handle UPDATE_WORDS', () => {
  const action = {
    type: 'UPDATE_WORDS',
    words: ['technology', 'innovation OR trash', 'test']
  };

  expect(search(undefined, action)).toEqual({
    ...INITIAL_STATE,
    searchWords: ['technology', 'innovation', 'trash', 'test']
  });
});

it('should handle REMOVE_WORD', () => {
  const oldState = { ...INITIAL_STATE, searchWords: ['tech', 'trash', 'innovation'] };
  const action = {
    type: 'REMOVE_WORD',
    word: 'innovation'
  };

  expect(search(oldState, action)).toEqual({
    ...oldState,
    searchWords: ['tech', 'trash']
  });
});
