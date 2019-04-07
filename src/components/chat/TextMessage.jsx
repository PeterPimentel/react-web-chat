import React from 'react';

export default function ReceivedMessage({ conversation, type }) {
    return (
        <div className={`ps-chat-message ${type}`}>
            <span>{conversation.message}</span>
        </div>
    )
}