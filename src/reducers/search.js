import { findIndex, flatten, without, map } from 'lodash';

const INITIAL_STATE = {
  query: '',
  status: '',
  disabled: false,
  searchWords: [],
  results: {}
};

const updateThumb = (state, action) => {
  let result = { ...action.thumb.result, thumb: action.thumb.value };
  let results = { ...state.results };
  results.items[findIndex(results.items, ['url', result.url])] = result;
  return { ...state, results };
};

const updateStatus = (state, action) => {
  let newState = Object.assign({}, state, { status: action.status });
  newState.disabled = newState.status === 'Done' ? false : true;
  return newState;
};

const getWords = (words) => {
  return words ? flatten(map(words, (word) => word.split(' OR '))) : [];
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.query };
    case 'UPDATE_STATUS':
      return updateStatus(state, action);
    case 'UPDATE_RESULTS':
      return { ...state, results: action.results };
    case 'UPDATE_THUMB':
      return updateThumb(state, action);
    case 'UPDATE_WORDS':
      return { ...state, searchWords: getWords(action.words) };
    case 'REMOVE_WORD':
      return { ...state, searchWords: without(state.searchWords, action.word) };
    default:
      return state;
  }
};

export default search;
