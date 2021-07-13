import React, { FunctionComponent } from 'react';
import { ImageMessage } from './ImageMessage/ImageMessage';
import { TextMessage } from './TextMessage/TextMessage';

type MessageHandlerProps = {
    message: string;
    from: 'USER' | 'BOT';
    type: 'TEXT' | 'IMAGE';
};

export const MessageHandler: FunctionComponent<MessageHandlerProps> = ({ message, from, type }) => {
    switch (type) {
        case 'TEXT':
            return <TextMessage message={message} from={from} />;
        case 'IMAGE':
            return <ImageMessage source={message} from={from} />;
        default:
            return null;
    }
};
