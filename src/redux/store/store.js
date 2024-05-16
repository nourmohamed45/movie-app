import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { movieReducer } from '../reducers/movieReducer';

const middleware = applyMiddleware(thunk);
export const movieStore = createStore(movieReducer, middleware);