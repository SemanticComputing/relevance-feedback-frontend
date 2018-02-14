import { map } from 'lodash';
import results, { INITIAL_STATE } from './results';


it('should return the initial state', () => {
  expect(results(undefined, {})).toEqual(INITIAL_STATE);
});

it('should handle UPDATE_RESULTS', () => {
  const newResults = {
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
    results: newResults
  };

  const expectedItems = map(newResults.items, (item) => ({ ...item, thumb: undefined }));

  expect(results(undefined, action)).toEqual({
    ...INITIAL_STATE,
    ...newResults,
    count: 2,
    items: expectedItems
  });
});

it('should keep old thumbs at UPDATE_RESULTS', () => {
  const newResults = {
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

  const oldState = {
    ...INITIAL_STATE,
    items: [
      {
        name: 'title',
        url: 'http://example.fi',
        description: 'description',
        thumb: true
      },
      {
        name: 'old item',
        url: 'http://somethingelse.fi',
        description: 'some description',
        thumb: false
      },
    ]
  };

  const expectedState = {
    ...oldState,
    count: 2,
    items: [
      oldState.items[0],
      {
        name: 'other title',
        url: 'http://another.fi',
        description: 'other description',
        thumb: undefined
      }
    ]
  };

  const action = {
    type: 'UPDATE_RESULTS',
    results: newResults
  };


  expect(results(oldState, action)).toEqual(expectedState);
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
  const newResults = {
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
  const expectedResults = { ...newResults, items: [expectedResult, otherResult] };

  expect(results({ ...newResults }, action)).toEqual({ ...expectedResults });
});
