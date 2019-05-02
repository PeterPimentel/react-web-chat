// Action Types
export const Types = {
    MESSAGE_INPUT_DISABLED: 'MESSAGE_INPUT_DISABLED',
    BOT_TYPING: 'BOT_TYPING',
    BUTTON_LOADING:'BUTTON_LOADING'
};

// Reducer
const initialState = {
    messageInputDisabled: false,
    botTyping: false,
    buttonLoading:false
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
        case Types.BUTTON_LOADING:
            return {
                ...state,
                buttonLoading: action.payload
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

export function buttonLoading(status) {
    return {
        type: Types.BUTTON_LOADING,
        payload: status
    }
}