import React from 'react';

export default function ReceivedMessage({ conversation }) {
    return (
        <div className="ps-chat-image-message">
            <a href={conversation.image.url} target="_blank" rel="noopener noreferrer">
                <img alt="Imagem enviada pelo usuário" src={conversation.image.url}/>
            </a>
        </div>
    )
}