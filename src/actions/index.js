export const updateQuery = (query) => ({
  type: 'UPDATE_QUERY',
  query
});

export const updateSearchType = (searchType) => ({
  type: 'UPDATE_SEARCH_TYPE',
  searchType
});

export const updateStatus = (status) => ({
  type: 'UPDATE_STATUS',
  status
});

export const updateResults = (results) => ({
  type: 'UPDATE_RESULTS',
  results
});

export const updateWords = (words) => ({
  type: 'UPDATE_WORDS',
  words
});

export const removeWord = (word) => ({
  type: 'REMOVE_WORD',
  word
});

export const updateThumb = (thumb) => ({
  type: 'UPDATE_THUMB',
  thumb
});

export const describeTopic = (topic) => ({
  type: 'DESCRIBE_TOPIC',
  topic
});

export const doSearch = (search) => ({
  type: 'SEARCH',
  search
});

export const notifyProcessingDone = () => ({
  type: 'SEARCH_PROCESSING_DONE'
});

export const connect = () => ({
  type: 'CONNECT'
});
