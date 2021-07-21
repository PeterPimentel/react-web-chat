import axios from 'axios';
import { BotMessageResponse, MessageRequest } from '../types/messages.types';
import { getMessageUrl } from './urlService';

export const getChatbotResponse = (data: MessageRequest): Promise<BotMessageResponse> => {
    const url = getMessageUrl();

    return new Promise<BotMessageResponse>((resolve, reject) => {
        axios
            .post(url, {
                headers: {
                    'content-type': 'application/json',
                },
                data,
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject({ message: err.message });
            });
    });
};
