import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import links from './reducers/links';
import pagination from './reducers/pagination';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({ links, pagination }), composeEnhancer(applyMiddleware(logger)));

export default store;
