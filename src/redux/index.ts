import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import messageReducer, { MessageStateType } from './messageStore';
import layoutReducer, { LayoutStateType } from './layoutStore';

const rootReducer = combineReducers({
    messages: messageReducer,
    layout: layoutReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default rootReducer;

export type StoreType = {
    messages: MessageStateType;
    layout: LayoutStateType;
};
