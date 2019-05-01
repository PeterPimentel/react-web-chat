import { fetchMessage } from '../../api/nlu';
import {addContext, convertBasedOnNlu, normalizeMessage} from '../../utils/messageUtil';
import {messageInputDisabled, botTyping} from './uiReducer';
import MockMessages from '../../utils/MockMessages';

// Action Types
export const Types = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    SAVE_CONTEXT: 'SAVE_CONTEXT',
    ERROR_ON_SEND_MESSAGE: 'ERROR_ON_SEND_MESSAGE'
};

// Reducer
const initialState = {
    conversation:MockMessages,
    context: {},
    errorOnSendMessage: null
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
        case Types.ERROR_ON_SEND_MESSAGE:
            return {
                ...state,
                errorOnSendMessage: action.payload
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

export function showError(err) {
    return {
        type: Types.ERROR_ON_SEND_MESSAGE,
        payload: err
    }
}

export function sendMessage(message, context) {
    return async dispatch => {
        let normalizedMessage = normalizeMessage(message)
        dispatch(botTyping(true))
        dispatch(showError(null))
        // dispatch(messageInputDisabled(true))
        dispatch(addMessage(normalizedMessage))
        try {
            const withContext = addContext(normalizedMessage,context)
            const res = await fetchMessage(convertBasedOnNlu(withContext,'me'))
            dispatch(botTyping(false))
            dispatch(messageInputDisabled(false))
            dispatch(saveContext(res.context))
            dispatch(addMessage(convertBasedOnNlu(res, 'bot')))
        } catch (err) {
            dispatch(messageInputDisabled(false))
            dispatch(showError({message: err.message ? err.message :'Ocorreu um erro inesperado.'}))
        }
    };
}