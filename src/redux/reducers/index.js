import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import messageReducer from './messageReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';

export const Reducers = (history) => combineReducers({
    router: connectRouter(history),
    messageReducer: messageReducer,
    uiReducer: uiReducer,
    authReducer:authReducer
});