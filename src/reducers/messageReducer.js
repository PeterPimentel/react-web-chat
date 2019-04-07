// Action Types
export const Types = {
    SEND_MESSAGE: 'SEND_MESSAGE'
};

// Reducer
const initialState = {
    conversation: []
};

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SEND_MESSAGE:
            return {
                ...state,
                conversation: state.conversation.concat(action.payload)
            };
        default:
            return state;
    }
};

// Action Creators
export function sendMessage(message) {
    return {
      type: Types.SEND_MESSAGE,
      payload: message
    }
  }