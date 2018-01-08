const INITIAL_STATE = {
  query: '',
  status: '',
  results: {}
};

const updateThumb = (state, action) => {
  let result = Object.assign({}, action.thumb.result, { thumb: action.thumb.value });
  let results = Object.assign({}, state.results, { [result.url]: result });
  return Object.assign({}, state, { results });
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return Object.assign({}, state, action.query);
    case 'UPDATE_STATUS':
      return Object.assign({}, state, action.status);
    case 'UPDATE_RESULTS':
      return Object.assign({}, state, { results: action.results });
    case 'UPDATE_THUMB':
      return updateThumb(state, action);
    default:
      return state;
  }
};

export default search;
