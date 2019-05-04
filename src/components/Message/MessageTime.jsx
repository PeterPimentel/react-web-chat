import React from 'react';
import {getMessageTime} from '../../utils/dateUtil';

function MessageTime ({conversation, align}) {
    return (
        <div className="ps-message-time" style={{justifyContent:align}}>
            <span>{
                getMessageTime(conversation.sentAt)
            }</span>
        </div>
    )
}

export default MessageTime;