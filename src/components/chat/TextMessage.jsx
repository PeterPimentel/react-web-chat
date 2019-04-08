import React from 'react';

export default function TextMessage({conversation}) {
    const from = conversation.from === 'me' ? 'ps-message-sent' : 'ps-message-received';
    return (
        <div className={`ps-message ${from}`}>
            <span>{conversation.message}</span>
        </div>
    )
}