import React from 'react';

export default function ImageMessage({ conversation }) {
    return (
        <div className="ps-image-message">
            <a href={conversation.image.url} target="_blank" rel="noopener noreferrer">
                <img alt="Imagem enviada pelo usuário" src={conversation.image.url}/>
            </a>
        </div>
    )
}