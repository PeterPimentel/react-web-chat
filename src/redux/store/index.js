import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { Reducers } from '../reducers';
export const history = createBrowserHistory()

export const Store = createStore(
    Reducers(history),
    compose(
        applyMiddleware(routerMiddleware(history),thunk)
    )
);