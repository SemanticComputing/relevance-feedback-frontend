import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers';
import socketMiddleware from './middleware/socketMiddleware';

const store = createStore(reducer, {}, applyMiddleware(thunk, socketMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
