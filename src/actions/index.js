export const updateQuery = (query) => ({
  type: 'UPDATE_QUERY',
  query
});

export const updateStatus = (status) => ({
  type: 'UPDATE_STATUS',
  status
});

export const updateResults = (results) => ({
  type: 'UPDATE_RESULTS',
  results
});

export const updateThumb = (thumb) => ({
  type: 'UPDATE_THUMB',
  thumb
});

export const doSearch = (search) => ({
  type: 'SEARCH',
  search
});

export const connect = () => ({
  type: 'CONNECT'
});
