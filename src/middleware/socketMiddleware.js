import { updateStatus, updateResults, updateWords } from '../actions';
import io from 'socket.io-client';
import _ from 'lodash';

const getThumbs = (items) => {
  return _.map(_.filter(items, (item) => typeof item.thumb === 'boolean'), (item) => _.pick(item, ['url', 'thumb'])); 
};

const socketMiddleware = (() => {
  let socket = null;

  const onMessage = (actionType, store) => evt => {
    //Parse the JSON message received on the websocket
    const msg = evt.data;
    switch(actionType) {
      case 'SEARCH_STATUS_MSG':
        //Dispatch an action that adds the received message to our state
        store.dispatch(updateStatus(msg));
        break;
      case 'SEARCH_READY':
        store.dispatch(updateResults(JSON.parse(msg)));
        break;
      case 'SEARCH_WORDS':
        store.dispatch(updateWords(msg));
        break;
      default:
        break;
    }
  };

  return store => next => action => {
    switch(action.type) {
      case 'SEARCH':
        if (socket === null) {
          socket = io('http://localhost:5000');
          socket.on('search_status_msg', onMessage('SEARCH_STATUS_MSG', store));
          socket.on('search_words', onMessage('SEARCH_WORDS', store));
          socket.on('search_ready', onMessage('SEARCH_READY', store));
        }
        socket.emit('search', {
          data: {
            query: action.search.query,
            result_id: action.search.results.result_id,
            results: getThumbs(action.search.results.items)
          }
        });
        break;

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action);
    }
  };

})();

export default socketMiddleware;
