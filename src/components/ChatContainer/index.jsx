import React from 'react';
import SentMessage from '../chat/SentMessage';
import ReceivedMessage from '../chat/ReceivedMessage';
import Data from './Data';

export default function ChatContainer(){
    return(
        <div className="ps-chat-container">
            {Data.map((conv, index) => {
                return (
                    conv.type === 'sent' ? 
                    <SentMessage key={index} conversation={conv}/> : 
                    <ReceivedMessage key={index} conversation={conv}/>
                )
            })}
        </div>
    )
}

// https://dribbble.com/shots/3658238-Chat-app-multiple-conversations CHAT REFERENCE