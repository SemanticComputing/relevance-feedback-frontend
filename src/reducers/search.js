import { findIndex, flatten, without, map, reduce } from 'lodash';

const INITIAL_STATE = {
  query: '',
  status: '',
  disabled: false,
  searchWords: [],
  results: {
    items: []
  }
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

const updateResults = (state, action) => {
  const thumbs = reduce(state.results.items, (res, item) => {
    res[item.url] = item.thumb;
    return res;
  }, {});
  return {
    ...state,
    results: {
      ...action.results,
      items: map(action.results.items, (item) => ({
        ...item, thumb: thumbs[item.url]
      }))
    }
  };
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
      return updateResults(state, action);
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
