import React, {Component, PropTypes} from 'react';
import {browserHistory, Router} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './redux/combinedReducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends Component {

  render() {

    const routes = require('./routes/index').default(store);

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}
