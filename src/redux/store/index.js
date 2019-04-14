import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers, applyMiddleware(thunk));