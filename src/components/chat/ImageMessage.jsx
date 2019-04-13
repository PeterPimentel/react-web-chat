import React from 'react';

export default function ImageMessage({ conversation }) {
    return (
        <div className="ps-image-message">
            <a href={conversation.message} target="_blank" rel="noopener noreferrer">
                <img alt="Imagem enviada pelo usuário" src={conversation.message}/>
            </a>
        </div>
    )
}