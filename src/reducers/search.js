import { map, includes, without } from 'lodash';

export const INITIAL_STATE = {
  query: '',
  type: 'news',
  status: '',
  disabled: false,
  searchWords: [],
  bannedWords: []
};

const updateStatus = (state, action) => {
  return { ...state, status: action.status };
};

const removeWord = (state, action) => {
  let words = state.bannedWords.slice();
  if (includes(words, action.word)) {
    words = without(words, action.word);
  } else {
    words.push(action.word);
  }
  return { ...state, bannedWords: words };
};

const getWords = (words) => {
  return words ? map(words, (word) => word.split(' OR ')) : [];
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.query };
    case 'UPDATE_SEARCH_TYPE':
      return { ...state, type: action.searchType };
    case 'SEARCH':
      return { ...state, disabled: true };
    case 'SEARCH_PROCESSING_DONE':
      return { ...state, disabled: false };
    case 'UPDATE_STATUS':
      return updateStatus(state, action);
    case 'UPDATE_WORDS':
      return { ...state, searchWords: getWords(action.words) };
    case 'REMOVE_WORD':
      return removeWord(state, action);
    default:
      return state;
  }
};

export default search;
