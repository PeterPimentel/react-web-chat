import messageReducer from './messageReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    messageReducer: messageReducer
});