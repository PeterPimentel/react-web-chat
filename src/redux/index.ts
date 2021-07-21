import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import messageReducer, { MessageStateType } from './messageStore';
import layoutReducer, { LayoutStateType } from './layoutStore';
import contextReducer, { ContextStateType } from './contextStore';

const rootReducer = combineReducers({
    messages: messageReducer,
    layout: layoutReducer,
    context: contextReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default rootReducer;

export type StoreType = {
    messages: MessageStateType;
    layout: LayoutStateType;
    context: ContextStateType;
};
