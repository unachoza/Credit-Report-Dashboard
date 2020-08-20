import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reports from './redux/reducers/reports';

const rootReducer = combineReducers({ reports });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
