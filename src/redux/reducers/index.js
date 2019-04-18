import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import uiReducer from './uiReducer';

export const Reducers = combineReducers({
    messageReducer: messageReducer,
    uiReducer: uiReducer
});