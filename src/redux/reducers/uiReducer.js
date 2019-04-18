// Action Types
export const Types = {
    MESSAGE_INPUT_DISABLED: 'MESSAGE_INPUT_DISABLED'
};

// Reducer
const initialState = {
    messageInputDisabled: false
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case Types.MESSAGE_INPUT_DISABLED:
            return {
                ...state,
                messageInputDisabled: action.payload
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