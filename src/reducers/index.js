import { combineReducers } from 'redux';
import search from './search';
import results from './results';

const reducer = combineReducers({
  search,
  results
});

export default reducer;
