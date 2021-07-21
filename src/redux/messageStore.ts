import { Message } from '../types/messages.types';
import { getChatbotResponse } from '../services/messageService';
import { contextUpdate } from './contextStore';
import { modalToggle } from './layoutStore';

const MESSAGE_FETCH_SUCCESS = 'MESSAGE/FETCH/SUCCESS';

export type MessageStateType = Message[];

type FetchMessageSuccessAction = {
    type: typeof MESSAGE_FETCH_SUCCESS;
    payload: Message;
};

type MessageActionTypes = FetchMessageSuccessAction;

const INITIAL_STATE: Message[] = [];

export function fetchMessagesSuccess(message: Message): FetchMessageSuccessAction {
    return {
        type: MESSAGE_FETCH_SUCCESS,
        payload: message,
    };
}

export const sendMessage = (message: Message, context: Object) => async (dispatch: Function) => {
    dispatch(fetchMessagesSuccess(message));

    try {
        const botResponse = await getChatbotResponse({ message: message.message, context });

        dispatch(fetchMessagesSuccess(botResponse.message));
        dispatch(contextUpdate(botResponse.context));
    } catch (error) {
        dispatch(
            modalToggle({
                visible: true,
                content: error.message,
            }),
        );
    }
};

export default function reducer(state: MessageStateType = INITIAL_STATE, action: MessageActionTypes) {
    switch (action.type) {
        case MESSAGE_FETCH_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}
