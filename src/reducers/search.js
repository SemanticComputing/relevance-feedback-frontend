import { findIndex } from 'lodash';

const INITIAL_STATE = {
  query: '',
  status: '',
  searchWords: '',
  results: {}
};

const updateThumb = (state, action) => {
  let result = Object.assign({}, action.thumb.result, { thumb: action.thumb.value });
  let results = Object.assign({}, state.results);
  results.items[findIndex(results.items, ['url', result.url])] = result;
  return Object.assign({}, state, { results });
};

const updateStatus = (state, action) => {
  let newState = Object.assign({}, state, { status: action.status });
  newState.disabled = newState.status === 'Done' ? false : true;
  return newState;
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return Object.assign({}, state, { query: action.query });
    case 'UPDATE_STATUS':
      return updateStatus(state, action);
    case 'UPDATE_RESULTS':
      return Object.assign({}, state, { results: action.results });
    case 'UPDATE_THUMB':
      return updateThumb(state, action);
    case 'UPDATE_WORDS':
      return Object.assign({}, state, { searchWords: action.words });
    default:
      return state;
  }
};

export default search;
