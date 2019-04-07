import React from 'react';

export default function ReceivedMessage({ conversation }) {
    return (
        <div className="ps-chat-image-message">
            <a href={conversation.image.url} target="_blank">
                <img src={conversation.image.url}/>
            </a>
        </div>
    )
}