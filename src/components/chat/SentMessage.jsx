import React from 'react';

export default function SentMessage({ conversation }) {
    return (
        <div className="ps-chat-message ps-chat-sent">
            <div>
                {conversation.message}
            </div>
        </div>
    )
}