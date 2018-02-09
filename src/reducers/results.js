import { findIndex, map, reduce } from 'lodash';

export const INITIAL_STATE = {
  items: []
};

const updateThumb = (state, action) => {
  let result = { ...action.thumb.result, thumb: action.thumb.value };
  let results = { ...state };
  results.items[findIndex(results.items, ['url', result.url])] = result;
  return { ...results };
};

const updateResults = (state, action) => {
  const thumbs = reduce(state.items, (res, item) => {
    res[item.url] = item.thumb;
    return res;
  }, {});
  return {
    ...action.results,
    count: action.results.items.length,
    items: map(action.results.items, (item) => ({
      ...item,
      thumb: thumbs[item.url]
    }))
  };
};

const describeTopic = (state, action) => {
  if (!state.topic_words)
    return { ...state };
  return { ...state, currentTopic: state.topic_words[action.topic] };
};

const results = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return updateResults(state, action);
    case 'SEARCH':
      return { ...state, count: undefined };
    case 'UPDATE_THUMB':
      return updateThumb(state, action);
    case 'DESCRIBE_TOPIC':
      return describeTopic(state, action);
    default:
      return state;
  }
};

export default results;
