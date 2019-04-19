// Action Types
export const Types = {
    MESSAGE_INPUT_DISABLED: 'MESSAGE_INPUT_DISABLED',
    BOT_TYPING: 'BOT_TYPING'
};

// Reducer
const initialState = {
    messageInputDisabled: false,
    botTyping: false
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case Types.MESSAGE_INPUT_DISABLED:
            return {
                ...state,
                messageInputDisabled: action.payload
            };
        case Types.BOT_TYPING:
            return {
                ...state,
                botTyping: action.payload
            };
        default:
            return state;
    }
};

// Action Creators
export function messageInputDisabled(status) {
    return {
        type: Types.MESSAGE_INPUT_DISABLED,
        payload: status
    }
}

export function botTyping(status) {
    return {
        type: Types.BOT_TYPING,
        payload: status
    }
}