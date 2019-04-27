import React from 'react';
import {MESSAGE_ANIMATION} from '../../config/uiSettings';
import Linkify from 'linkifyjs/react';

export default function TextMessage({conversation}) {
    let animation = '';
    let from = '';
    if(conversation.from === 'bot'){
        from = 'ps-message-received'
        if(MESSAGE_ANIMATION)
            animation = 'scale-up-left'
    }else{
        from = 'ps-message-sent'
        if(MESSAGE_ANIMATION)
            animation = 'scale-up-center'
    }
    return (
        <div>
            {conversation.message.length > 0 &&
                <div className={`ps-message ${from} ${animation}`}>
                    <Linkify>{conversation.message}</Linkify>
                </div>
            }
        </div>
    )
}