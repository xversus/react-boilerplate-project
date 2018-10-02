import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';

const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(thunk)
);

if (process.env.NODE_ENV === 'development') {
  window.store = store; // for debug purposes
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
