import { Message } from '../types/messages.types';
import { DATA } from '../data';

const MESSAGE_FETCH_SUCCESS = 'MESSAGE/FETCH/SUCCESS';

export type MessageStateType = Message[];

type FetchMessageSuccessAction = {
    type: typeof MESSAGE_FETCH_SUCCESS;
    payload: Message;
};

type MessageActionTypes = FetchMessageSuccessAction;

const INITIAL_STATE: Message[] = DATA;

export function fetchMessagesSuccess(message: Message): FetchMessageSuccessAction {
    return {
        type: MESSAGE_FETCH_SUCCESS,
        payload: message,
    };
}

export default function reducer(state: MessageStateType = INITIAL_STATE, action: MessageActionTypes) {
    switch (action.type) {
        case MESSAGE_FETCH_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}
