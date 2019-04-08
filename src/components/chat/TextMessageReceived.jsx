import React from 'react';

export default function TextMessage({conversation}) {
    return (
        <div className="ps-chat-message ps-chat-received">
            <span>{conversation.message}</span>
        </div>
    )
}