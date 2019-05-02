import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';

export const Reducers = combineReducers({
    messageReducer: messageReducer,
    uiReducer: uiReducer,
    authReducer:authReducer
});