import React from 'react';

export default function ReceivedMessage({ conversation }) {
    return (
        <div className="ps-chat-message ps-chat-received">
            <div>
                {conversation.message}
            </div>
        </div>
    )
}