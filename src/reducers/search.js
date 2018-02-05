import { findIndex, without, map, reduce, isEmpty } from 'lodash';

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
      count: action.results.items.length,
      items: map(action.results.items, (item) => ({
        ...item,
        thumb: thumbs[item.url]
      }))
    }
  };
};

const removeWord = (state, action) => {
  let words = [];
  for (const word of state.searchWords) {
    const newWord = without(word, action.word);
    if (!isEmpty(newWord))
      words.push(newWord);
  }
  return { ...state, searchWords: words };
};

const getWords = (words) => {
  return words ? map(words, (word) => word.split(' OR ')) : [];
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.query };
    case 'UPDATE_STATUS':
      return updateStatus(state, action);
    case 'UPDATE_RESULTS':
      return updateResults(state, action);
    case 'CLEAR_RESULT_COUNT':
      return { ...state, results: { ...state.results, count: undefined } };
    case 'UPDATE_THUMB':
      return updateThumb(state, action);
    case 'UPDATE_WORDS':
      return { ...state, searchWords: getWords(action.words) };
    case 'REMOVE_WORD':
      return removeWord(state, action);
    default:
      return state;
  }
};

export default search;
