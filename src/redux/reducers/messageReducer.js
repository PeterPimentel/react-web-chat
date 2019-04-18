import { fetchMessage } from '../../api/nlu';
import {addContext, convertBasedOnNlu, normalizeMessage} from '../../utils/messageUtil';
import {messageInputDisabled} from './uiReducer';

// Action Types
export const Types = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    SAVE_CONTEXT: 'SAVE_CONTEXT'
};

// Reducer
const initialState = {
    conversation:[],
    context: {}
};

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_MESSAGE:
            return {
                ...state,
                conversation: state.conversation.concat(...action.payload)
            };
        case Types.SAVE_CONTEXT:
            return {
                ...state,
                context: action.payload
            };
        default:
            return state;
    }
};

// Action Creators
export function addMessage(message) {
    return {
        type: Types.ADD_MESSAGE,
        payload: message
    }
}

export function saveContext(ctx) {
    return {
        type: Types.SAVE_CONTEXT,
        payload: ctx
    }
}

export function sendMessage(message, context) {
    return async dispatch => {
        let normalizedMessage = normalizeMessage(message)
        dispatch(messageInputDisabled(true))
        dispatch(addMessage(normalizedMessage))
        try {
            const withContext = addContext(normalizedMessage,context)
            const res = await fetchMessage(convertBasedOnNlu(withContext,'me'))
            dispatch(messageInputDisabled(false))
            dispatch(saveContext(res.context))
            dispatch(addMessage(convertBasedOnNlu(res, 'bot')))
        } catch (err) {
            dispatch(messageInputDisabled(false))
            console.log("Err[REDUCER]", err)
        }
    };
}