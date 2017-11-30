const INITIAL_STATE = {
  query: '',
  status: '',
  results: {},
  thumbs: {}
};

const updateThumb = (state, action) => {
  let thumbs = {};
  thumbs[action.thumb.url] = action.thumb;
  thumbs = Object.assign({}, state.thumbs, thumbs);
  return Object.assign({}, state, { thumbs });
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
