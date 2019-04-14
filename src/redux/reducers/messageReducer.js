import DATA from '../../components/ChatContainer/Data';
import { fetchMessage } from '../../api/nlu';
import {normalizeInput as watsonInput} from '../../utils/watson';
import {extractContext} from '../../utils/messageUtil';
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

export function sendMessage(message) {
    return dispatch => {
        dispatch(addMessage(extractContext(message)))
        fetchMessage(message).then(res => {
            dispatch(saveContext(res.context))
            dispatch(addMessage(watsonInput(res)))
        }).catch(err => {
            console.log("Err[REDUCER]", err)
        })
    };
}