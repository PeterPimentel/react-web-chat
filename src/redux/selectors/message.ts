import { Message } from '../../types/messages.types';
import { StoreType } from '../index';

export function getMessages(state: StoreType): Message[] {
    return state.messages;
}
