import search from './search';

it('should return the initial state', () => {
  expect(search(undefined, {})).toEqual({
    query: '',
    status: '',
    results: {}
  });
});

it('should handle UPDATE_QUERY', () => {
  const action = {
    type: 'UPDATE_QUERY',
    query: 'text'
  };

  expect(search(undefined, action)).toEqual({
    query: 'text',
    status: '',
    results: {}
  });
});

it('should handle UPDATE_STATUS', () => {
  const action = {
    type: 'UPDATE_STATUS',
    status: 'status'
  };

  expect(search(undefined, action)).toEqual({
    query: '',
    status: 'status',
    results: {}
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
    query: '',
    status: '',
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
  const expectedResult = Object.assign({}, result, { thumb: true });
  const expectedResults = Object.assign({}, results, { items: [expectedResult, otherResult] });

  expect(search({ results }, action)).toEqual({
    results: expectedResults
  });
});
